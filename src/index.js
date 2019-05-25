import _ from 'lodash';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';






import Layout from './Layout.vue';

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
    components:{Layout},
    template: '<div id="ex"><Layout/></div>'

  })