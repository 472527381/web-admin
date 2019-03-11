/**
 * 系统告警
 */

const Main = () => import('@/views/main.vue');
const SiteIndex = () => import('@/views/site/');

export default [{
    path: '/site',
    name: 'site',
    meta: {
        name: '电站管理',
        auth: true,
        icon: 'icon-alarm'
    },
    redirect: {
        name: 'siteIndex'
    },
    component: Main,
    children: [{
        path: 'list',
        name: 'siteIndex',
        meta: {
            name: '电站管理',
            auth: true
        },
        component: SiteIndex
    }]
}]
