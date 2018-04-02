<template>
    <nav class="bar bar-tab">
        <router-link to="/home" class="tab-item" replace>
            <span class="icon icon-dataAsset"></span>
            <span class="tab-label">数据资产</span>
        </router-link>
        <router-link to="/use" class="tab-item" replace>
            <span class="icon icon-dataUse"></span>
            <span class="tab-label">数据使用</span>
        </router-link>
        <router-link to="/manage" class="tab-item" replace>
            <span class="icon icon-dataManage"></span>
            <span class="tab-label">数据管理</span>
        </router-link>
    </nav>
</template>
<script>
export default {
    name: 'bar',
    data() {
        return {};
    }
};

</script>
