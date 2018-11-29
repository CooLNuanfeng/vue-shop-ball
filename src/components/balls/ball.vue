<template>
    <transition
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
    >
        <div v-if="show" class="ball" :style="init">
            <div class="inner"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ball',
    props: ['init'],
    data(){
        return {
            show: false,
        }
    },
    methods: {
        enter(el,done){
            // console.log('enter',this.init.target);
            setTimeout(()=>{
                el.style.transform = `translateX(${this.init.target.x}px)`;
                el.children[0].style.transform = `translateY(${this.init.target.y}px)`;
                done();
            },0)
        },
        afterEnter(){
            this.show = false
        }
    }
}
</script>

<style lang="css">
.ball{
    position: fixed;
    top: 100px;
    left: 100px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    z-index: 10;
    transition: all .5s cubic-bezier(.11,.52,.33,.92);
}
.inner{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: blue;
    transition: all .5s linear;
}

</style>
