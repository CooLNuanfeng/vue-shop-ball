<template>
  <div class="home">
      <List></List>
      <div class="btm-bar">
          <div class="btm-shop J_btmShop"></div>
      </div>
  </div>
</template>

<script>
import List from '@/components/list/list.vue';


export default {
  name: 'home',
  data(){
    return{
        content: this.$store.state.count
    }
  },
  mounted(){

  },
  components: {
      List,
  },
  methods: {

  }
}
</script>
<style lang="css">
*{margin: 0; padding: 0}
.btm-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #666;
    z-index: 12;
}
.btm-shop{
    position: absolute;
    top: 10px;
    left: 20px;
    width: 40px;
    height: 40px;
    background: #036;
    border-radius: 20px;
}
</style>
