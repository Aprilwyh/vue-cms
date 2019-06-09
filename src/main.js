//入口文件
import Vue from 'vue'
import app from './App.vue'
import  VueJsonp  from  'vue-jsonp'
Vue.use(VueJsonp)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://192.168.1.113:8888/vue-cms/getJsonp';

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app),
    router
})
