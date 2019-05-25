import _ from 'lodash';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';






import Login from './Login.vue';

import router from "./router.js" 
//window.localStorage.clear();
  // function component() {
  //   let element = document.createElement('div');

  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //   return element;
  // }
  // document.body.appendChild(component());

  Vue.use(ElementUI);
 
  new Vue({
    el:"#app",
    router,
    components:{Login},
    template: '<div id="ex"><Login/></div>'

  })