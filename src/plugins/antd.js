import Vue from 'vue'
import {
    Affix,
    Anchor,
    AutoComplete,
    Alert,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Collapse,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Icon,
    Input,
    InputNumber,
    Layout,
    List,
    LocaleProvider,
    message,
    Menu,
    Modal,
    notification,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Steps,
    Switch,
    Table,
    Transfer,
    Tree,
    TreeSelect,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Upload,
    Drawer,
} from 'ant-design-vue';

import "ant-design-vue/dist/antd.less"; // 引入官方提供的 less 样式入口文件

Vue.use(Affix)
Vue.use(Anchor)
Vue.use(AutoComplete)
Vue.use(Alert)
Vue.use(Avatar)
Vue.use(BackTop)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(Calendar)
Vue.use(Card)
Vue.use(Collapse)
Vue.use(Carousel)
Vue.use(Cascader)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(Dropdown)
Vue.use(Form)
Vue.use(Icon)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Layout)
Vue.use(List)
Vue.use(LocaleProvider)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Pagination)
Vue.use(Popconfirm)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Rate)
Vue.use(Row)
Vue.use(Select)
Vue.use(Slider)
Vue.use(Spin)
Vue.use(Steps)
Vue.use(Switch)
Vue.use(Table)
Vue.use(Transfer)
Vue.use(Tree)
Vue.use(TreeSelect)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(TimePicker)
Vue.use(Timeline)
Vue.use(Tooltip)
Vue.use(Upload)


Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$confirm = Modal.confirm;
