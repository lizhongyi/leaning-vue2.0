import Vue from 'vue'
import Login from 'src/components/user/login'

describe('login.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Login)
        })

    })
})