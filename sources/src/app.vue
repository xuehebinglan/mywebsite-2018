<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
        <button class='btn' @click="changeLala">学习了下动态组件，按钮变动</button>
        <component :is="lala"></component>
    </div>
</template>

<script>
    import Header from './todo/header.vue'
    import Footer from './todo/footer.jsx'
    import Todo from './todo/todo.vue'

    export default {
        data() {
            return {
                lala: "Footer",
                status: 0
            }
        },
        methods: {
            changeLala() {
                if (this.status === 0) {
                    this.lala = "Footer"
                    this.status = 1
                } else {
                    this.lala = "Header"
                    this.status = 0
                }
            }
        },
        components: {
            Header,
            Footer,
            Todo,
        }
    }
</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
    .btn {
        margin: 42px auto;
        display: block;
    }
</style>


