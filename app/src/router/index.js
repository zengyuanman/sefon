import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import use from '@/components/use';
import manage from '@/components/manage';
import manage01 from '@/components/manage-01';
import manage02 from '@/components/manage-02';
import manage03 from '@/components/manage-03';
import manage04 from '@/components/manage-04';
import manage05 from '@/components/manage-05';
import manage06 from '@/components/manage-06';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home/asset'
    }, {
        // 数据资产，首页
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/home/asset',
        children: [{
            path: 'asset',
            component: function(resolve) {
                require(['@/components/homeAsset'], resolve);
            }
        }, {
            path: 'bus',
            component: function(resolve) {
                require(['@/components/homeBus'], resolve);
            }
        }]
    }, {
        path: '/use',
        name: 'use',
        component: use,
        redirect: '/use/change',
        children: [{
            path: 'change',
            component: function(resolve) {
                require(['@/components/useChange'], resolve);
            }
        }, {
            path: 'share',
            component: function(resolve) {
                require(['@/components/useShare'], resolve);
            }
        }]
    }, {
        path: '/manage',
        name: 'manage',
        component: manage
    }, {
        path: '/manage/01',
        component: manage01
    }, {
        path: '/manage/02',
        component: manage02
    }, {
        path: '/manage/03',
        component: manage03
    }, {
        path: '/manage/04',
        component: manage04
    }, {
        path: '/manage/05',
        component: manage05
    }, {
        path: '/manage/06',
        component: manage06
    }]
});
