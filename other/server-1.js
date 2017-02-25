// ExpressJS调用方式
var express = require('express');
var app = express();
var fs = require('fs');
var path = require("path");
var mkdirsSync = function(dirname) {
    //console.log(dirname);
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
};
// 引入NodeJS的子进程模块
var child_process = require('child_process');
app.get('*', function(req, res) {
    // 完整URL
    var url = req.protocol + '://' + req.hostname + req.originalUrl;
    //console.log(req.originalUrl);
    var filePath = "";
    var fileName = "";
    if (req.originalUrl == '/') {
        fileName = 'index';
        filePath = "e:/seo/";
    } else {
        var pathArray = req.originalUrl.split('/');
        fileName = pathArray[pathArray.length - 1];
        filePath = "e:/seo/" + req.originalUrl.replace(fileName, "") + '/';
    }
    console.log(filePath + "....");
    // 预渲染后的页面字符串容器
    var content = '';
    // 开启一个phantomjs子进程
    //应当先蒋策seo服务器是否存在改文件如果有直接跳转
    var phantom = child_process.spawn('phantomjs', ['spider.js', url]);
    // 设置stdout字符编码
    phantom.stdout.setEncoding('utf8');
    // 监听phantomjs的stdout，并拼接起来
    phantom.stdout.on('data', function(data) {
        content += data.toString();
    });
    // 监听子进程退出事件
    phantom.on('exit', function(code) {
        switch (code) {
            case 1:
                console.log('加载失败');
                res.send('加载失败');
                break;
            case 2:
                console.log('加载超时: ' + url);
                res.send(content);
                break;
            default:
                var w_data = content;
                var w_data = new Buffer(w_data);
                /**
                 * filename, 必选参数，文件名
                 * data, 写入的数据，可以字符或一个Buffer对象
                 * [options],flag,mode(权限),encoding
                 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
                 */
                mkdirsSync(filePath, 0777);
                console.log(filePath + fileName + '.html');
                fs.writeFile(filePath + fileName + '.html', w_data, { flag: 'w' }, function(err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('写入成功');
                    }
                });
                res.send(content);
                break;
        }
    });
});
app.listen(3000);
