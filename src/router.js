import Vue from 'vue'
import Router from 'vue-router'
import UserInfoTool from "./plugins/user-info-tool";
import SiteRouter from './router/site.router'

Vue.use(Router)


/**
 * 路由字段配置说明
 *
 * @param {Object} meta 路由元数据
 *
 * @param {Boolean} meta.unfold 是否可以在菜单栏展开
 * @param {Boolean} meta.hide 是否可以在菜单栏显示
 * @param {Boolean} meta.auth 是否需要鉴权
 * @param {Boolean} meta.title 当前页面标题，如果和name相同，则忽略
 * @param {Boolean} meta.bread 当前面包屑名称，如果和name相同，则忽略
 *
 */

const router = new Router({
    routes: [{
                path: '/',
                redirect: {
                    name: "site"
                }
            }
        ]
        .concat(
            SiteRouter
        )
});

const routerEnterGuard = ((to, from, next) => {
    const token = UserInfoTool.getToken();
    // 需要登录的路由
    if (to.meta.auth) {
        // 用户没有登录
        if (!token) {
            return next({
                path: 'login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
        // 用户已登录
        else {
            return next();
        }
    }
    // 不需要登录
    else {
        if (to.name === '/login') {
            if (token) {
                return next({
                    name: to.query.redirect ? to.query.redirect : '/'
                })
            }

            return next();
        } else {
            return next();
        }
    }
});

// router.beforeEach(routerEnterGuard);

export default router;
