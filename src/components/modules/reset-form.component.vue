<template>
    <div>
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "search-list",
        props: {
            form: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                formCopy: this.$utils.deepClone(this.form)
            }
        },
        methods: {
            /**
             * 处理空的参数
             * @param data
             * @returns
             */
            cleanData(data) {
                let _data = {};
                for (let key in data) {
                    if(Object.prototype.toString.call(data[key]) === '[object Object]') {
                        _data[key] = null;
                    } else if (data[key] instanceof Array) {
                        _data[key] = [];
                    } else {
                        _data[key] = undefined;
                    }
                }
                return _data;
            },
            // 重置
            reset() {
                let _form = this.$utils.deepClone(this.formCopy);
                console.log(_form)

                this.$emit('update:form', _form);
            },
            // 清空
            clean () {
                let _form = this.cleanData(this.form);
                console.log(_form)

                this.$emit('update:form', _form);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
