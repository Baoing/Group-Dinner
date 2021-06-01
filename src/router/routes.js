
const Login = () => import('@/views/Login')
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/Layout/Home')
const Order = () => import('@/views/Layout/Order')
const Me = () => import('@/views/Layout/Me')
const SetLocation = () => import('@/views/SetLocation')

const About = () => import('@/views/About')
const PrivacyPolicy = () => import('@/views/About/privacy-policy')
const Tos = () => import('@/views/About/tos')

const Qrcode = () => import('@/views/Qrcode')
const Coupon = () => import('@/views/Coupon')
const Preference = () => import('@/views/Preference')
const Notify = () => import('@/views/Notify')
const Subsidy = () => import('@/views/Subsidy')
const Wallet = () => import('@/views/Wallet')

// 个人设置
const Setting = () => import('@/views/Setting')
const SetAuthor = () => import('@/views/Setting/author')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/home',
    children: [{
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        isLogin: true
      }
    },{
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        title: '首页',
        isLogin: true
      }
    },{
      path: '/me',
      name: 'me',
      component: Me,
      meta: {
        title: '首页',
        isLogin: true
      }
    }
    ]
  },
  {
    path: '/setLocation',
    name: 'setLocation',
    component: SetLocation,
    meta: {
      title: '设置取餐地址',
      isLogin: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于',
      isLogin: true
    }
  },
  {
    path: '/tos',
    name: 'Tos',
    component: Tos,
    meta: {
      title: '服务协议'
    }
  },
  {
    path: '/privacyPolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: '用户协议'
    }
  },
  {
    path: '/qrcode',
    name: 'Qrcode',
    component: Qrcode,
    meta: {
      title: '二维码',
      isLogin: true
    }
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: Coupon,
    meta: {
      title: '优惠券',
      isLogin: true
    }
  },
  {
    path: '/preference',
    name: 'Preference',
    component: Preference,
    meta: {
      title: '口味偏好',
      isLogin: true
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
    meta: {
      title: '个人设置',
      isLogin: true
    }
  },
  {
    path: '/setAuthor',
    name: 'SetAuthor',
    component: SetAuthor,
    meta: {
      title: '头像设置',
      isLogin: true
    }
  },
  {
    path: '/notify',
    name: 'Notify',
    component: Notify,
    meta: {
      title: '消息通知',
      isLogin: true
    }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      title: '钱包',
      isLogin: true
    }
  },
  {
    path: '/subsidy',
    name: 'Subsidy',
    component: Subsidy,
    meta: {
      title: '餐补',
      isLogin: true
    }
  },
]

export default routes