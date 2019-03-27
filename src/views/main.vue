<template>
    <div class="main">
        <aside-com></aside-com>

        <div class="main-container scroll">
            <header-com></header-com>

            <div class="main-container-cover">
                <div class="main-breadcrumb">
                    <!-- 面包屑 -->
                    <a-breadcrumb class="main-breadcrumb-cover">
                        <a-breadcrumb-item v-for="(item, index) in breadcrumbList"
                                           :key="index">
                            <router-link :to="{ name: item.name, query: item.query }">
                                {{ item.meta.bread || item.meta.name }}
                            </router-link>
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>

                <router-view></router-view>
            </div>
            <div class="footer">Copyright © 2018 哲合科技</div>
        </div>
    </div>
</template>

<script>
import AsideCom from "@/components/common/aside.component";
import HeaderCom from "@/components/common/header.component";

export default {
    name: "home",
    data() {
        return {
            breadcrumbList: []
        };
    },
    components: {
        AsideCom,
        HeaderCom
    },
    watch: {
        $route(data) {
            this.processBread(data);
        }
    },
    methods: {
        /**
         * 处理全局面包屑
         * @param route 当前路由信息
         */
        processBread(route) {
            let arr = route.matched.filter((el, index) => {
                return el.name && (el.meta.unfold || index);
            });

            this.breadcrumbList = this.uniq(arr);
        },
        // 数组去重
        uniq(array) {
            var temp = [];
            var index = [];
            var l = array.length;
            for (var i = 0; i < l; i++) {
                for (var j = i + 1; j < l; j++) {
                    if (array[i].meta.name === array[j].meta.name) {
                        i++;
                        j = i;
                    }
                }
                temp.push(array[i]);
                index.push(i);
            }
            return temp;
        }
    },
    mounted() {
        this.processBread(this.$route);
    }
};
</script>


<style rel="stylesheet/scss" lang="scss">
.main {
    display: flex;
    background: #eee;

    &-breadcrumb {
        padding: 16px 32px;
        background: #fff;

        &-cover {
            @include pxAndLh(14);
        }
    }

    &-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 100vh;

        &-cover {
            width: 100%;
            // min-height: calc(100% - 76px - 64px);
            flex: 1;
            display: flex;
            flex-direction: column;
        }
    }

    .footer {
        height: 76px;
        line-height: 76px;
        text-align: center;
        font-size: 12px;
        color: $text-color-black-45;
    }
}

/* 内容区域 */
.container {
    padding: 24px 32px;
}
</style>

