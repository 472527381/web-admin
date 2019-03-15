<template functional>
    <a-sub-menu v-on="listeners"
        :key="data.attrs.menuInfo.name">
        <span slot="title">
            <i :class="['icon', 'icon-' + data.attrs.menuInfo.meta.icon]" />
            <span>{{data.attrs.menuInfo.meta.name}}</span></span>
        <template v-for="item in data.attrs.menuInfo.children">
            <a-menu-item v-if="!item.meta.unfold"
                :key="item.name">
                <i :class="['icon', 'icon-' + item.meta.icon]" />
                <span>{{item.meta.name}}</span>
            </a-menu-item>
            <aside-item v-else
                :menuInfo="item"
                :key="item.name" />
        </template>
    </a-sub-menu>
</template>

<script type="text/javascript">
    export default {
        name: "aside-item",
        data() {
            return {
            }
        },
        methods: {

        },
        mounted() {
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
