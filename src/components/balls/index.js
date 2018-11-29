import ball from './ball.vue';

export default {
    install(Vue){

        Vue.prototype.$createball = function(options){
            const ballContructor = Vue.extend(ball);
            const ballInstance = new ballContructor();

            ballInstance.$mount(document.createElement('div'));
            document.body.append(ballInstance.$el);
            ballInstance.init = options;
            ballInstance.show = true;
        }
    }
}
