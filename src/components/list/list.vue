<template>
    <div class="list">
        <div class="list-item" v-for="n in lists" :key="n">
            <a href="javascript:;" class="list-add" @click="show">+</a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Balls from '@/components/balls';
Vue.use(Balls);

export default {
    data(){
        return{
            lists: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
    },
    methods: {
        show(ev){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop
                || document.body.scrollTop || 0;

            var targetDom = document.getElementsByClassName('J_btmShop')[0].getBoundingClientRect();
            // console.log(ev);
            // console.log(targetDom);
            this.$createball({
                top: (ev.target.offsetTop - scrollTop)+'px',
                left: ev.target.offsetLeft+'px',
                target: {
                    x: targetDom.left - ev.target.offsetLeft,
                    y: targetDom.top - (ev.target.offsetTop - scrollTop)
                }
            });
        }
    }
}
</script>

<style lang="css">
.list{
    padding: 20px;
}
.list-item{
    padding: 20px 0;
    height: 30px;
    border-bottom: 1px solid #ebebeb;
}
.list-add{
    float: right;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #036;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
}
</style>
