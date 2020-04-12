    // 菜单相关路由
    const menus = [{
            key: '/app/index',
            title: '首页',
            icon: 'iconpeizhizhongxin',
            component: 'Home'
        },
        {
            key: '/app/ui',
            title: 'UI',
            icon: 'iconpeizhizhongxin',
            subs: [{
                    key: '/app/ui/buttons',
                    title: '按钮',
                    component: 'Buttons'
                },
                {
                    key: '/app/ui/map',
                    title: '地图',
                    component: 'MapUi'
                },
            ],
        },
        {
            key: '/app/animation',
            title: '动画',
            icon: 'iconyunhangjieguo',
            subs: [{
                key: '/app/animation/basicAnimations',
                title: '基础动画',
                component: 'BasicAnimations',
            }],
        },
        {
            key: '/app/table',
            title: '表格',
            icon: 'iconyongliguanli',
            subs: [{
                key: '/app/table/basicTable',
                title: '基础表格',
                component: 'BasicTable'
            }],
        },
        {
            key: '/app/form',
            title: '表单',
            icon: 'iconyongliguanli2',
            subs: [{
                key: '/app/form/basicForm',
                title: '基础表单',
                component: 'BasicForm'
            }],
        },
        {
            key: '/subs4',
            title: '页面',
            icon: 'iconpeizhizhongxin',
            subs: [{
                key: '/login',
                title: '登录'
            }]
        },
        {
            key: '/app/404',
            title: '404',
            icon: 'iconpeizhizhongxin',
            component: 'noMatch'
        },
        {
            key: '/app/extension',
            title: '功能扩展',
            icon: 'iconpeizhizhongxin',
            subs: [{
                    key: '/app/extension/queryParams',
                    title: '问号形式参数',
                    component: 'QueryParams',
                    query: '?param1=1&param2=2',
                },
                {
                    key: '/app/extension/visitor',
                    title: '访客模式',
                    component: 'Visitor',
                    login: true,
                },
                {
                    key: '/app/extension/multiple',
                    title: '多级菜单',
                    subs: [{
                        key: '/app/extension/multiple/child',
                        title: '多级菜单子菜单',
                        subs: [{
                            key: '/app/extension/multiple/child/child',
                            title: '多级菜单子子菜单',
                            component: 'MultipleMenu',
                        }, ],
                    }, ],
                },
            ],
        },
    ]

    export default menus;