module.exports = {
    css: {
        loaderOptions: {
            // Sass 样式传入共享的全局变量
            sass: {
                data: `@import "@/style/variable.scss"; @import "@/style/mixin.scss"; @import "@/style/common/antd-reset.scss";`
            },
            less: {
                modifyVars: {
                    /* less 变量覆盖，用于自定义 ant design 主题 */
                    'primary-color': '#ff6d33', // 全局主色
                    'link-color': '#1890FF', // 链接色
                    '@success-color': '#52C41A', // 成功色
                    '@warning-color': '#FAAD14', // 警告色
                    '@error-color': '#F5222D', // 错误色
                    '@font-size-base': '14px', // 主字号
                    '@heading-color': 'rgba(0, 0, 0, .85)', // 标题色
                    '@text-color': 'rgba(0, 0, 0, .65)', // 主文本色
                    '@text-color-secondary': 'rgba(0, 0, 0, .45)', // 次文本色
                    '@disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
                    '@border-radius-base': '4px', // 组件/浮层圆角
                    '@border-color-base': '#e9e9e9', // 边框色
                    '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)'
                },
                javascriptEnabled: true,
            }
        }
    },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://116.62.64.183',
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
};
