import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/hsservice/ui/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/hsservice/ui',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/hsservice/ui',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      hideInMenu: true,
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/hsservice/ui/join',
    name: 'join',
    meta: {
      hideInMenu: true
      },
    component: Main,
    children: [
      {
        path: 'join_page',
        name: 'join_page',
        meta: {
          hideInMenu: true,
          icon: '_qq',
          title: 'QQ群'
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  },
   {
      path: '/hsservice/ui/components',
      name: 'order',
      meta: {
        icon: 'logo-buffer',
        title: '订单管理'
      },
      component: Main,
      children: [
        {
          path: 'tables_page_orderInfo',
          name: 'tables_page_orderInfo',
          meta: {
            icon: 'md-grid',
            title: '订单流水'
          },
          component: () => import('@/view/components/tables/orderInfo.vue')
        },
        {
          path: 'tables_page_orderInfoNotFinish',
          name: 'tables_page_orderInfoNotFinish',
          meta: {
            icon: 'md-grid',
            title: '异常订单'
          },
          component: () => import('@/view/components/tables/orderNotFinish.vue')
        },
        {
          path: 'tables_page_dayOrder',
          name: 'tables_page_dayOrder',
          meta: {
            icon: 'md-grid',
            title: '日报表'
          },
          component: () => import('@/view/components/tables/orderStaticsDay.vue')
        },
        {
          path: 'tables_page_MonthOrder',
          name: 'tables_page_MonthOrder',
          meta: {
            icon: 'md-grid',
            title: '月报表'
          },
          component: () => import('@/view/components/tables/orderStaticsMonth.vue')
        }
      ]
    },
{
    path: '/hsservice/ui/components',
    name: 'areaAndDevice',
    meta: {
      icon: 'logo-buffer',
      title: '网点设备'
    },
    component: Main,
    children: [
      {
        path: 'tables_page_area_user',
        name: 'tables_page_area_user',
        meta: {
          icon: 'md-grid',
          title: '网点'
        },
        component: () => import('@/view/components/tables/area.vue')
      },
       {
          path: 'tables_page_device_fault',
          name: 'tables_page_device_fault',
          meta: {
            icon: 'md-grid',
            title: '故障设备'
          },
          component: () => import('@/view/components/tables/devicesFault.vue')
        },
       {
         path: 'tables_page_device_user',
         name: 'tables_page_device_user',
         meta: {
           icon: 'md-grid',
           title: '设备信息'
         },
         component: () => import('@/view/components/tables/devices.vue')
       }
    ]
  },
  {
    path: '/hsservice/ui/components',
    name: 'configuration',
    meta: {
      access: ['admin'],
      icon: 'logo-buffer',
      title: '配置管理'
    },
    component: Main,
    children: [
      {
        path: 'tables_page_province',
        name: 'tables_page_province',
        meta: {
          icon: 'md-grid',
          title: '省'
        },
        component: () => import('@/view/components/tables/province.vue')
      },
      {
        path: 'tables_page_city',
        name: 'tables_page_city',
        meta: {
          icon: 'md-grid',
          title: '城市'
        },
        component: () => import('@/view/components/tables/city.vue')
      },
      {
        path: 'tables_page_area',
        name: 'tables_page_area',
        meta: {
          icon: 'md-grid',
          title: '区域'
        },
        component: () => import('@/view/components/tables/area.vue')
      },
      {
        path: 'tables_page_consume',
        name: 'tables_page_consume',
        meta: {
          icon: 'md-grid',
          title: '消费类型'
        },
        component: () => import('@/view/components/tables/consumes.vue')
      },
       {
         path: 'tables_page_device',
         name: 'tables_page_device',
         meta: {
           icon: 'md-grid',
           title: '设备信息'
         },
         component: () => import('@/view/components/tables/devices.vue')
       },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          hideInMenu: true,
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          hideInMenu: true,
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/hsservice/ui/update',
    name: 'update',
    meta: {
      hideInMenu: true,
      icon: 'md-cloud-upload',
      title: '数据上传'
    },
    component: Main,
    children: [
      {
        path: 'update_table_page',
        name: 'update_table_page',
        meta: {
          icon: 'ios-document',
          title: '上传Csv'
        },
        component: () => import('@/view/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '粘贴表格数据'
        },
        component: () => import('@/view/update/update-paste.vue')
      }
    ]
  },
  {
    path: '/hsservice/ui/excel',
    name: 'excel',
    meta: {
      hideInMenu: true,
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/hsservice/ui/tools_methods',
    name: 'tools_methods',
    meta: {
      hideInMenu: true,
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          icon: 'ios-hammer',
          title: '工具方法'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/hsservice/ui/directive',
    name: 'directive',
    meta: {
      hideInMenu: true,
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: () => import('@/view/directive/directive.vue')
      }
    ]
  },
  {
    path: '/hsservice/ui/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: '动态路由'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: '带参路由'
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/hsservice/ui/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/hsservice/ui/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
