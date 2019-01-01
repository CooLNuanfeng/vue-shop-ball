<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="dialog">Btn dialog</button>
  </div>
</template>

<script>
import Vue from 'vue';
import Dialog from '@/components/dialog'

Vue.use(Dialog);

export default {
    name: 'home',
    methods: {
        dialog(){
            this.$createDialog({
                contents: 'Hello Dialog',
                init: {
                    showCallback: function(){
                        console.log('show');
                    },
                    hideCallback: function(){
                        console.log('hide');
                    }
                }
            });
        }
    }
}

</script>
