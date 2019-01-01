<template>
  <div class="dialog" v-if="show">
      <div class="dialog-warp">
          <div class="dialog-body">{{contents}}</div>
          <div class="dialog-footer">
              <button @click="close">close</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Dialog',
    props: ['contents','init'],
    data(){
        return{
            show: false
        }
    },
    watch: {
        show(val){
            if(val){
                this.init.showCallback();
            }else{
                this.init.hideCallback();
            }
        }
    },
    methods: {
        close(){
            this.show = false;
        }
    }
}
</script>

<style lang="css" scoped>
.dialog{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: rgba(0,0,0,.7);
}
.dialog-warp{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 110;
    text-align: center;
    font-size: 14px;
}
</style>
