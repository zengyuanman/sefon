<template>
    <div class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'><span class="icon icon-left"></span></a>
            <h1 class="title">数据使用</h1>
        </header>
        <bar></bar>
        <div class="content">
            <div class="my-tab-wrap-2">
                <div class="tab-hd">
                    <div class="tab-hd-inner">
                        <div :class="$route.path==='/use/change'?'tab-item active':'tab-item'">
                            <router-link to="/use/change" replace><span>交换数据量</span></router-link>
                        </div>
                        <div :class="$route.path==='/use/share'?'tab-item active':'tab-item'">
                            <router-link to="/use/share" replace><span>共享数据量</span></router-link>
                        </div>
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
    name: 'datause',
    data() {
        return {};
    },
    components: {
        bar
    }
};

</script>
