<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <router-view v-if="isRouterAlive" />
        </div>
    </a-locale-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            locale: zhCN,
            isRouterAlive: true
        };
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function() {
                this.isRouterAlive = true;
            });
        }
    }
};
</script>
<style lang="scss">
@import "style/common/reset.css";
@import "style/common/layout";
@import "style/common/text";
@import "style/common/bg";
@import "style/common/qz-form";
@import "style/common/antd-reset";
@import "style/common/icon";
@import "style/common/index";
@import "style/common/font";
</style>
