<template>
    <div class="page page-current">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'><span class="icon icon-left"></span></a>
            <h1 class="title">元数据质量检核</h1>
        </header>
        <bar></bar>
        <div class="content">
            <div class="card-attr-wrap">
                <div class="attr-wrap">
                    <div class="attr-item">
                        <a href="javascript:;">
                            <div class="attr-val">1000</div>
                            <div class="attr-name">正确</div>
                        </a>
                    </div> 
                     <div class="attr-item">
                        <a href="javascript:;">
                            <div class="attr-val">1000</div>
                            <div class="attr-name">问题</div>
                        </a>
                    </div>    
                     <div class="attr-item">
                        <a href="javascript:;">
                            <div class="attr-val">92%</div>
                            <div class="attr-name">合格率</div>
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
                                    <span class="c2">合格率</span>
                                </div>
                                <div class="text">正确/问题数</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i class="first">1</i>
                                    <span class="c1">快递业务系统快递业务系统快递业务系统快递业务系统</span>
                                    <span class="c2">99%</span>
                                </div>
                                <div class="text"><span>100100100100100</span><span>/100</span></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i class="second">2</i>
                                    <span class="c1">快递业务系统</span>
                                    <span class="c2">99%</span>
                                </div>
                                <div class="text"><span>100100100100100</span><span>/100</span></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i>3</i>
                                    <span class="c1">快递业务系统</span>
                                    <span class="c2">99%</span>
                                </div>
                                <div class="text"><span>100100100100100</span><span>/100</span></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i>4</i>
                                    <span class="c1">快递业务系统</span>
                                    <span class="c2">99%</span>
                                </div>
                                <div class="text"><span>100100100100100</span><span>/100</span></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">
                                    <i>5</i>
                                    <span class="c1">快递业务系统</span>
                                    <span class="c2">99%</span>
                                </div>
                                <div class="text"><span>100100100100100</span><span>/100</span></div>
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
    name: 'datamanage03',
    data() {
        return {};
    },
    components: {
        bar
    }
};

</script>
