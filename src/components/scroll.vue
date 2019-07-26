<template>
    <transition name="fade">
        <div ref="scrollDom" class="scrollBox scroll">
            <slot></slot>
        </div>
    </transition >
</template>
<script>
    export default {
        name:'scroll',
        data(){
            return{
                showDom:false
            }
        },
        mounted(){
            this.scrollTo();
            window.addEventListener('scroll',this.scrollTo);
        },
        methods:{
            scrollTo(){
                let t = document.documentElement.scrollTop||document.body.scrollTop;
                let height= window.innerHeight;
                let domHeight = this.$refs.scrollDom.offsetTop;
                if((t+height)>domHeight) {
                    this.$refs.scrollDom.classList.remove('scroll')
                }
            }
        },
        destroyed(){
            window.removeEventListener('scroll',this.scrollTo);
        }
    }
</script>
<style lang="less" scoped>
    .scrollBox {
        position: relative;
        transition: all 2s;
        top:0;
    }
    .scroll {
        top:80px;
        opacity: 0;
    }
</style>

