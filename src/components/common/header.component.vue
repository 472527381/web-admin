<template>
    <header class="header-cmp">
        <a-icon :type="aside_collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="setCollapsed"></a-icon>
        <div class="header-right">
            11
        </div>
    </header>
</template>

<script type="text/javascript">
import { mapMutations, mapGetters } from "vuex";
import UserInfoTool from "../../plugins/user-info-tool";

export default {
    name: "header-component",
    props: {
        module: {
            type: String,
            default: "admin"
        }
    },
    inject: ["reload"],
    data() {
        return {
            stationList: []
        };
    },
    computed: {
        ...mapGetters(["aside_collapsed"])
    },
    methods: {
        ...mapMutations({
            set_collapsed: "ASIDE_COLLAPSE"
        }),

        setCollapsed() {
            this.set_collapsed(!this.aside_collapsed);
        }
    },
    created() {},
    mounted() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.header-cmp {
    z-index: 10;
    height: 64px;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    .station-selector {
        &-select {
            width: 220px;
        }
    }
    .anticon {
        font-size: 20px;
        cursor: pointer;
    }
}

.header-right {
    display: flex;
    align-items: center;
}
</style>
