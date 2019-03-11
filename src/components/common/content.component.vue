<template>
    <div class="wrap">
        <!-- 面包屑下标题 -->
        <div class="wrap-title">
            <span class="wrap-title-text" >
                <slot name="title">{{ title }}</slot>
            </span>
        </div>

        <!-- header -->
        <div class="wrap-header">
            <slot name="header"></slot>
            <slot name="button"></slot>
        </div>

        <!-- container-->
        <div class="wrap-cont">
            <div class="wrap-cont-cover">
                <div class="wrap-container">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
            </div>
        </div>

        <!-- footer -->
        <div class="wrap-footer bg-white" :class="{'footerStyle':footerStyle}">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "contentComponent",
        data() {
            return {
                title: "",
                footerStyle:false
            };
        },
        watch: {
            $route(route) {
                this.title = route.meta.title || route.meta.name;
            }
        },
        mounted() {
            this.title = this.$route.meta.title || this.$route.meta.name;
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    .route-nesting {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .wrap {
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;

        &-title {
            padding: 0 32px 24px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-text {
                @include pxAndLh(20);
                color: $text-color-black-85;
                font-weight: bold;
            }
        }

        &-header {
            background: #fff;
            padding: 0 32px;
            border-bottom: 1px solid #e1e1e1;
        }

        &-cont {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding: 0 24px;

            &-cover {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 24px 0;
            }
        }

        &.default &-container {
            background: #fff;
        }

        &-container {
            flex: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;

            & > div {
                flex: 1;
                overflow-x: hidden;
            }
        }
        &-footer{
            position: fixed;
            left: 0;
            bottom: 0;
            padding-left: 256px;
            width: 100%;
            text-align: center;

        }
        .footerStyle{
            padding-left: 64px;
        }
    }
</style>
