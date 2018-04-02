<template>
    <div class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'><span class="icon icon-left"></span></a>
            <h1 class="title">流程申请情况</h1>
        </header>
        <bar></bar>
        <div class="content">
            <div class="list-block">
                <ul>
                    <li>
                        <a href="/demos/list/view-list" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s01"><i class="icon icon-m-ysjsj"></i></span>
                                元数据审计</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/demos/list/contacts-list" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s02"><i class="icon icon-m-sjczsj"></i></span>
                                数据操作审计</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/demos/list/songs-list" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s03"><i class="icon icon-m-ysjzljh"></i></span>
                                元数据质量检核</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/demos/list/mail-list" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s04"><i class="icon icon-m-zsjzljh"></i></span>
                                主数据质量检核</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/demos/list/simple-list" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s05"><i class="icon icon-m-ywxtzljh"></i></span>
                                业务系统质量检核</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/demos/list/inset-list" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="icon-wrap s06"><i class="icon icon-m-lcsqqk"></i></span>
                                流程申请情况</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import bar from '@/components/bar';
export default {
    name: 'datamanage-06',
    data() {
        return {};
    },
    components: {
        bar
    }
};

</script>
