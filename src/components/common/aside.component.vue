<template>
    <aside class="aside">
        <a-menu
            :inlineCollapsed="aside_collapsed"
            :openKeys.sync="openKeys"
            @click="menu"
            mode="inline"
            theme="dark"
            v-model="selectedKeys"
        >
            <template v-for="item in routes">
                <a-menu-item
                    :key="item.name"
                    v-if="!item.meta.unfold"
                >
                    <!-- <icon :type="item.meta.icon" /> -->
                    <a-icon type="align-center"/>
                    <span>{{ item.meta.name }}</span>
                </a-menu-item>
                <aside-item
                    :key="item.name"
                    :menuInfo="item"
                    v-else
                ></aside-item>
            </template>
        </a-menu>
    </aside>
</template>

<script type="text/javascript">
    import { mapMutations, mapGetters } from "vuex";

    import AsideItem from "./aside-item.component";

    export default {
        name: "aside-component",
        data() {
            return {
                routes: [],
                selectedKeys: [],
                openKeys: []
            };
        },
        components: {
            AsideItem
        },
        computed: {
            ...mapGetters(["aside_collapsed"]),
        },
        watch: {
            $route() {
                this.setRoute();
            }
        },

        methods: {
            menu(item) {
                this.$router.push({
                    name: item.key
                });
            },

            /**
             * 设置默认选中和展开的key
             * @param route 路由
             * @param routeName 当前路由 name
             */
            setDefaultKey(route, routeName) {
                this.selectedKeys = route.meta.unfold ? [routeName] : [route.name];
                this.openKeys.push(route.name);
            },

            // 设置路由
            setRoute() {
                const routes = this.$router.options.routes.filter(el => {
                    return el.children && !el.meta.hide;
                });
                this.routes = routes.filter(el => {
                    return !el.meta.hide;
                });
                this.initDefalutKey();
            },

            // 初始化时设置侧边栏类目选中
            initDefalutKey() {
                const name = this.$route.name;
                let matched = this.$route.matched;
                this.openKeys = [];
                for (let index = 0; index < matched.length - 1; index++) {
                    let el = matched[index]
                    if (!el.meta.unfold && !index) {
                        this.setDefaultKey(el, name);
                        break;
                    }
                    this.setDefaultKey(el, name);
                }
            }
        },
        created() {
        },
        mounted() {
            this.setRoute();
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    .aside {
        background: #001529;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.35);
        z-index: 1000;
        &::-webkit-scrollbar {
            display: none;
        }

        .ant-menu-inline {
            width: 256px;
        }
        .ant-menu-item,
        .ant-menu-submenu {
            .icon {
                color: $text-color-white-45;
                &:before {
                    margin-right: 10px;
                }
            }
        }

        .ant-menu-inline-collapsed {
            width: 64px;

            .icon + span {
                opacity: 0;
            }

            .ant-menu-item {
                padding: 0 25px !important;
            }

            .ant-menu-submenu {
                .ant-menu-submenu-title {
                    padding: 0 25px !important;
                }
            }
        }
    }
</style>
