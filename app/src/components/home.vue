<template>
    <div class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'><span class="icon icon-left"></span></a>
            <h1 class="title">数据资产</h1>
        </header>
        <bar></bar>
        <div class="content">
            <div class="my-card">
                <div class="attr-wrap-1">
                    <div class="attr-item">
                        <span class="attr-val">1020459 <i>GB</i></span>
                        <span class="attr-name">数据资产总量</span>
                    </div>
                    <div class="attr-item">
                        <span class="attr-val">1059 <i>GB</i> 200 <i>MB</i></span>
                        <span class="attr-name">数据资产总量</span>
                    </div>
                </div>
            </div>
            <div class="my-tab-wrap">
                <div class="tab-hd">
                    <div :class="$route.path==='/home/asset'?'tab-item active':'tab-item'">
                        <router-link to="/home/asset" replace><span>数据底盘</span></router-link>
                    </div>
                    <div :class="$route.path==='/home/bus'?'tab-item active':'tab-item'">
                        <router-link to="/home/bus" replace><span>业务系统</span></router-link>
                    </div>
                </div>
                <div class="tab-bd">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bar from '@/components/bar';
export default {
    name: 'home',
    data() {
        return {};
    },
    components: {
        bar
    }
};

</script>
