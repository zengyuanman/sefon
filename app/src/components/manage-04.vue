<template>
    <div class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'><span class="icon icon-left"></span></a>
            <h1 class="title">主数据质量检核</h1>
        </header>
        <bar></bar>
        <div class="content">
            <div class="my-list-block">
                <ul>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s03"><i class="icon icon-m-zlsjl"></i></span>治理数据量</div>
                                <div class="text">111</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s05"><i class="icon icon-m-zqsjl"></i></span>正确数据量</div>
                                <div class="text">111</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s02"><i class="icon icon-m-wtsjl"></i></span>问题数据量</div>
                                <div class="text">111</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s04"><i class="icon icon-m-hgl"></i></span>合格率</div>
                                <div class="text">111</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import bar from '@/components/bar';
export default {
    name: 'datamanage04',
    data() {
        return {};
    },
    components: {
        bar
    }
};

</script>
