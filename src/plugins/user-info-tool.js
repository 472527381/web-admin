const STORAGE_ENGINE = sessionStorage;

const UserInfoTool = {
    setToken(token) {
        STORAGE_ENGINE.setItem('_token', token);
    },

    // 获取用户Token
    getToken() {
        return STORAGE_ENGINE.getItem('_token');
    },

    setUser(user) {
        STORAGE_ENGINE.setItem('__user__', user);
    },

    // 获取用户信息
    getUser() {
        return STORAGE_ENGINE.getItem('__user__');
    },

    clear() {
        STORAGE_ENGINE.clear();
    },

    logout() {
        this.clear();
    }
};

export default UserInfoTool;
