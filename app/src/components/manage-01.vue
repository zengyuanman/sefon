<template>
    <div class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'><span class="icon icon-left"></span></a>
            <h1 class="title">元数据审计</h1>
        </header>
        <bar></bar>
        <div class="content">
            <div class="card-attr-wrap">
                <div class="attr-wrap">
                    <div class="attr-item">
                        <a href="javascript:;">
                            <div class="attr-val">1000</div>
                            <div class="attr-name">新增</div>
                        </a>
                    </div> 
                     <div class="attr-item">
                        <a href="javascript:;">
                            <div class="attr-val">1000</div>
                            <div class="attr-name">更新</div>
                        </a>
                    </div>    
                     <div class="attr-item">
                        <a href="javascript:;">
                            <div class="attr-val">92%</div>
                            <div class="attr-name">删除</div>
                        </a>
                    </div>  
                </div>
            </div>
            <div class="my-list-block manage-list">
                <ul>
                    <li class="head">
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <span class="c0">序号</span>
                                    <span class="c1">系统名称</span>
                                </div>
                                <div class="text">元数据变更总量</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i class="first">1</i>
                                    <span class="c1">快递业务系统快递业务系统快递业务系统快递业务系统</span>
                                </div>
                                <div class="text">1000000</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i class="second">2</i>
                                    <span class="c1">快递业务系统</span>
                                </div>
                                <div class="text">1000000</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i>3</i>
                                    <span class="c1">快递业务系统</span>
                                </div>
                                <div class="text">1000000</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i>4</i>
                                    <span class="c1">快递业务系统</span>
                                </div>
                                <div class="text">1000000</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i>5</i>
                                    <span class="c1">快递业务系统</span>
                                </div>
                                <div class="text">1000000</div>
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
    name: 'datamanage01',
    data() {
        return {};
    },
    components: {
        bar
    }
};

</script>
