const config = {
    siteName: "Error404's Blog", // 站点名
    siteShortname: "404's Blog", // 站点简称
    author: 'RavelloH', // 作者名
    description: "RavelloH's Blog", // 站点描述
    sign: 'Debug the life.', // 站点签名
    siteURL: 'https://blog.allenwang.eu.org/', // 站点地址,带有尾缀斜杠
    pwaStartURL: '/?mode=pwa', // PWA启动地址
    lang: 'zh-CN', // 站点语言
    iconImage: 'icon.png', // 站点图标
    githubUserName: 'alanwang233233', // github用户名
    mail: 'wangzihao2010@outlook.com', // 邮箱
    copyrightStartTime: '2025', // 建站开始年份
    siteBirthday: '2/03/2025 20:52:00', // 站点建立时间
    siteHelloWords: '404 Not Found.', // 站点欢迎语
    defaultScript: '<script>function main(){}</script>', // 默认站点脚本
    remotePath: '', // 远程资源路径，主站点不填
    trustDomain: ['ravelloh.top'],
    musicApi: 'https://music.api.ravelloh.top/',
    playList: '504715858',
    screenshotApi: 'https://screenshot.ravelloh.top/',
    twitterUsername: '@ravelohh',
    nav: [
        // 菜单导航设置
        {
            name: '主页',
            link: '/',
            id: 'nav-home',
        },
        {
            name: '项目',
            link: '/projects',
            id: 'nav-projects',
        },
        {
            name: '文稿',
            link: '/posts',
            id: 'nav-posts',
        },
        {
            name: '分类',
            link: '/categories',
            id: 'nav-categories',
        },
        {
            name: '标签',
            link: '/tags',
            id: 'nav-tags',
        },
        {
            name: '友链',
            link: '/friends',
            id: 'nav-friends',
        },
        {
            name: '关于',
            link: '/about',
            id: 'nav-about',
        },
    ],
    footer: [
        // footer icon
        {
            id: 'icon-github',
            href: 'https://github.com/alanwang233233',
            icon: 'ri-github-line',
            additions: {
                target: '_blank',
                dataUmamiEvent: 'footer-Github',
                ariaLabel: 'my github',
            },
        },
    ],
    menu: [
        //menu items
        {
            name: 'HOME',
            href: '/',
            icon: 'ri-home-3-fill',
        },
        {
            name: 'PROJECTS',
            href: '/projects',
            icon: 'ri-dashboard-fill',
        },
        {
            name: 'POSTS',
            href: '/posts',
            icon: 'ri-article-fill',
        },
        {
            name: 'CATEGORIES',
            href: '/categories',
            icon: 'ri-folder-fill',
        },
        {
            name: 'TAGS',
            href: '/tags',
            icon: 'ri-price-tag-3-fill',
        },
        // {
        //     name: 'IMAGES',
        //     href: '/images',
        //     icon: 'ri-image-fill',
        // },
        // {
        //     name: 'GAMES',
        //     href: '/games',
        //     icon: 'ri-gamepad-fill',
        // },
        {
            name: 'FRIENDS',
            href: '/friends',
            icon: 'ri-team-fill',
        },
        // {
        //     name: 'TIMELINE',
        //     href: '/timeline',
        //     icon: 'ri-map-pin-time-fill',
        // },
        {
            name: 'MESSAGE',
            href: '/message',
            icon: 'ri-message-2-fill',
        },
        {
            name: 'ABOUT',
            href: '/about',
            icon: 'ri-information-fill',
        },
        {
            // 空白占位分隔
            name: null,
        },

        {
            name: 'SIGN IN',
            href: '/account/signin',
            icon: 'ri-login-box-fill',
        },
        {
            name: 'SIGN UP',
            href: '/account/signup',
            icon: 'ri-user-add-fill',
        },
        {
            name: 'CHATROOM',
            href: 'https://cubebbs.eu.org',
            icon: 'ri-video-chat-fill',
        },
    ],
};

export default config;
