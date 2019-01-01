import DialogComponent from './dialog.vue';

export default {
    install(Vue){
        Vue.prototype.$createDialog = function(options){
            let DialogConstrutor = Vue.extend(DialogComponent);
            let DialogInstance = new DialogConstrutor();

            DialogInstance.$mount(document.createElement('div'));
            document.body.append(DialogInstance.$el);
            DialogInstance.init = options.init;
            DialogInstance.contents = options.contents;
            DialogInstance.show = true;
        }
    }
}
