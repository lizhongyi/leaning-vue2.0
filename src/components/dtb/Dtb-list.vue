<template>
    <div class="app">
        <button @click="add" class="add-btn">+</button>
        <transition-group name="slide" tag="ul" class="list-wrapper">
            <li class="list" v-for="(item, index) in lists" v-touch:swipeleft="showBtn.bind(this, index)" v-touch:swiperight="hideBtn.bind(this, index)" :key="item">
                <span class="text">{{item.text}}{{index}}</span>
                <transition name="move">
                    <button class="del-btn" @click="delList(index)" v-show="item.show">删除</button>
                </transition>
            </li>
        </transition-group>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists: [{
                    text: 'one',
                    show: false
                }, {
                    text: 'towa',
                    show: false
                }, {
                    text: 'towb',
                    show: false
                }, {
                    text: 'towc',
                    show: false
                }]

            }

        },
        methods: {
            add: function() {

                this.lists.push({
                    text: 'tow',
                    show: false
                })

            },
            delList(index) {
                this.lists.splice(index, 1);
            },
            showBtn() {

            },
            hideBtn() {

            }

        },
        directives: {
            touch: {
                // 指令的定义---
                inserted: function(el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        }
    }
</script>

<style lang="stylus">