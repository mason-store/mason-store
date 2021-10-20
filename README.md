# mason-store
## 什么是 mason-store
*这里集合了一些实用的模块，便于开发。*
> Integration 综合模块
常规业务中，变化最多的无非是字段，接口。此模块解决了常规业务的交互代码，例如弹窗，翻页，布局等一系列东西。你只需关注高频变化的字段、数据格式、接口名称就够啦。
- 优点：复用性高，开发速度快，布局统一。
- 缺点：定制性差，灵活性差，针对性强。
- 建议：常规业务够用，复杂（个性化高）的功能不适合直接使用此模块。如果喜欢这种开发模式，可以直接copy源码，单独重写一下呗。
## 快速上手
1. 安装依赖
``` bash
# 安装 mason-store
npm install mason-store
# 安装 element-ui （本模块默认使用element-ui)
npm install element-ui
```
2. 引入 [element-ui](https://element.eleme.cn/#/zh-CN)
``` JavaScript
// 在 @vue/cli 项目的 main.js 中加入以下代码
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
```
3. 引入 mason-store
``` JavaScript
import { Integration } from 'mason-store/lib/mason-store.umd'
import 'mason-store/lib/mason-store.css'
export default {
  name: 'App',
  components: { Integration },
  data() {return {}}
}
```
4. 在代码中调用
``` html
<!-- modelConf 是最核心的配置，也是唯一的配置文件。主要分为 mainButton、tabelConf、formConf 三个大模块。详细配置见下文。isShowView 作为一个异步渲染条件，在选择框需要异步加载时，这里需要先保证option数据先于视图，不然会出现一些诡异的BUG。 -->
<template>
  <Integration v-if="isShowView" :data="modelConf" />
</template>
```
1. 更多详细配置，请查看[示例代码](https://gitee.com/yuebu/mason-store/blob/master/examples/App.vue)
## **Button** 按钮配置
- 示例代码
``` JavaScript
import axios from 'axios'
const articleAdd = (data) => {
  axios.post({
    url: '/list',
    method: 'post',
    data,
  })
}
data() {
  return {
  modelConf: {
    mainButton: [
      {
        type: 'add', // 按钮类型
        label: '新增', // 按钮名称
        icon: 'el-icon-plus', // 按钮图标
        isShow: true, // 是否显示
        requestModel: {
          requestFn: articleAdd,
          requestData: (req, model) => {
            return req
          },
          responseData: (res) => {
            let _res = {}
            if (res.code === 0) {
              _res = { code: 0, msg: res.msg }
            } else {
              _res = { code: 1, msg: res.msg }
            }
            return _res
          },
        },
      },
    }
  }
}
```

**mainButton 属性说明**

| 参数         | 说明                                 | 类型    | 可选参数  | 默认值 |
| :----------- | :----------------------------------- | :------ | :-------- | :----- |
| type         | 按钮类型                             | string  | add,query | -      |
| label        | 按钮名称                             | string  | -         | -      |
| icon         | 图标名称，使用的是 element-ui 的图标 | string  | -         | -      |
| isShow       | 是否显示此按钮                       | boolean | -         | -      |
| requestModel | 点击此按钮会调用接口，请求配置       | object  | -         | -      |

**requestModel 属性说明**

| 参数         | 说明                                                                                                                                                | 类型     | 可选参数 | 默认值 |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- | :----- |
| requestFn    | 请求方法，封装好的 Promise 方法                                                                                                                     | function | -        | -      |
| requestData  | 处理请求参数                                                                                                                                        | function | -        | -      |
| responseData | 处理返回参数，这里需要处理成object数据返回。code=0,组件才会认为成功，进行下一步动作；code=1，组件会提示用户，停止界面交互；msg是成功/失败的提示内容 | string   | -        | -      |

## **Table** 表格配置
- 示例代码 <br />
``` JavaScript
import axios from 'axios'
const articleEdit = (data) => {
  axios.post({
    url: '/edit',
    method: 'post',
    data,
  })
}
const articleDelete = (data) => {
  axios.post({
    url: '/delete',
    method: 'post',
    data,
  })
}
data() {
  return {
  modelConf: {
    tabelConf: [
      { label: '姓名', prop: 'name', type: 'tag', width: 90, fiexd: 'left', },
      {
        label: '操作',
        type: 'operation',
        width: 380,
        fiexd: 'right',
        buttons: [
          {
            type: 'button',
            label: '编辑',
            icon: "el-icon-edit",
            isShow: (item: any) => {
              return true
            },
            requestModel: {
              requestFn: articleEdit,
              requestData: (req: any, model: any) => {
                return req
              },
              responseData: (res: any) => {
                let _res = res
                if (res.code === 0) {
                  _res = {
                    code: 0,
                    msg: res.msg,
                  }
                }
                return _res
              },
            },
          },
          {
            type: 'button',
            label: '删除',
            icon: "el-icon-delete",
            isShow: (item: any) => {
              return true
            },
            remindWinConf: {
              title: '删除警告！',
              msg: '您确定要删除这条数据？',
              code: 'delete',
            },
            requestModel: {
              requestFn: articleDelete,
              requestData: (req: any) => {
                return { infoId: req.infoId }
              },
              responseData: (res: any) => {
                let _res = res
                if (res.code === 0) {
                  _res = {
                    code: 0,
                    msg: res.msg,
                  }
                }
                return _res
              },
            },
          },
        ]
      }
    }
  }
}
```

**tabelConf 属性说明**

| 参数    | 说明     | 类型          | 可选参数                 | 默认值 |
| :------ | :------- | :------------ | :----------------------- | :----- |
| label   | 表头名称 | string        | -                        | -      |
| prop    | 对应字段 | string        | -                        | -      |
| type    | 类型     | string        | text,image,tag,operation | text   |
| width   | 列宽     | number/string | -                        | -      |
| fiexd   | 位置     | string        | left,right               | -      |
| buttons | 按钮     | Array         | -                        | -      |

**type 说明**

| 选项      | 说明                                                   | 数据类型 |
| :-------- | :----------------------------------------------------- | :------- |
| text      | 在 table 中显示正常文本                                | string   |
| image     | 在 table 中显示图片，需要在查询返回时处理成 Array 格式 | array    |
| tag       | 在 table 中显示标签，需要在查询返回时处理成 Array 格式 | string   |
| operation | 在 table 中显示操作（按钮）                            | -        |
```
image 数据示例:bannerUrl = ['https://mason.com/1.png','https://mason.com/2.png']
tag 数据示例:infoType = [{label: '下线',type: ''},{label: '置顶',type: 'danger'}] // success绿，danger红，info主题，置空是灰色
```

> buttons 说明

| 参数          | 说明     | 类型   | 可选参数 | 默认值 |
| :------------ | :------- | :----- | :------- | :----- |
| type          | 按钮类型 | string | -        | -      |
| label         | 按钮名称 | string | -        | -      |
| icon          | 图标配置 | string | -        | -      |
| isShow        | 是否显示 | string | -        | -      |
| requestModel  | 请求模型 | string | -        | -      |
| remindWinConf | 点击提醒 | string | -        | -      |

**requestModel 属性说明**

| 参数         | 说明                                                                                                                                                | 类型     | 可选参数 | 默认值 |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- | :----- |
| requestFn    | 请求方法，封装好的 Promise 方法                                                                                                                     | function | -        | -      |
| requestData  | 处理请求参数                                                                                                                                        | function | -        | -      |
| responseData | 处理返回参数，这里需要处理成object数据返回。code=0,组件才会认为成功，进行下一步动作；code=1，组件会提示用户，停止界面交互；msg是成功/失败的提示内容 | string   | -        | -      |

## **form** 表单配置
**示例代码**
``` JavaScript
const listTypeOpiton = [
  { label: '文章', value: 'a' },
  { label: '新闻', value: 'b' },
]
const uploadOnePhotoUrl = () => {return 'http://127.0.0.1:8080/upload'}
data() {
  return {
    modelConf: {
      formConf: [
        { label: '新闻标题', prop: 'infoTitle', maxlength: 60 },
        { label: '新闻类型', prop: 'infoType', type: 'select', option: listTypeOpiton},
        {
          label: '发布时间',
          prop: 'infoReleaseTime',
          type: 'date',
          dateType: 'date',
        },
        {
          label: '封面图片',
          prop: 'infoImgs',
          type: 'img',
          isSeek: false,
          required: false,
          requestModel: {
            requestFn: uploadOnePhotoUrl(),
            uploadName: 'file',
            uploadHeaders: { Authorization: 'E208475180234=' }, // 上传头部数据
            requestData: (req: any) => {
              return req
            },
            responseData: (response: any) => {
              let res = {}
              if (response.code === 0) {
                res = {
                  code: 0,
                  msg: response.msg,
                  path: response.data.location + response.data.path,
                  data: response.data,
                }
              } else {
                res = { code: 1, msg: response.msg }
              }
              return res
            },
          },
        },
      ]
    }
  }
}
```

**formConf 配置**

| 参数          | 说明                               | 类型          | 可选参数 | 默认值 |
| :------------ | :--------------------------------- | :------------ | :------- | :----- |
| label         | 名称                               | string        | textarea | -      |
| type          | 类型                               | string        | 参考下方 | text   |
| imagesWidth   | 宽度                               | string        | -        | 120px  |
| prop          | 字段                               | string        | -        | -      |
| maxlength     | 最大长度                           | string/number | -        | 32     |
| option        | 下拉选项                           | object        | -        | -      |
| isAddPermit   | 新增时是否允许输入                 | boolean       | -        | true   |
| isEditPermit  | 修改时是否允许输入                 | boolean       | -        | true   |
| isRemote      | 是否允许远程搜索                   | boolean       | -        | false  |
| required      | 是否必填                           | boolean       | -        | true   |
| limit         | 允许上传图片的数量                 | number        | -        | 1      |
| dateType      | 日期控件类型，例如日期，日期范围等 | string        | 参考下方 | date   |
| pickerOptions | 当前时间日期选择器特有的选项       | object        | -        | -      |
| requestModel  | 请求模块                           | string        | -        | -      |
| valueFormat   | 日期选择器 - 返回值格式            | string        | -        | -      |
| format        | 日期选择器 - 显示格式              | string        | -        | -      |
| uploadHeaders | 上传文件携带请求头                 | object        | -        | -      |
| span          | 布局                               | string        | -        | -      |

> **formConf.type**
- form-title: 表单分割线;
- text: 输入框;
- textarea: 文本框;
- radio: 单选;
- select_multiple: 远程搜索输入框;
- select: 选择框;
- img: 图片;
- richtext: 富文本;
- cascader: 级联选择器;

> **formConf.dateType**
- year: 年;
- month: 月;
- date: 标准日期;
- dates: 多个日期;
- week: 周;
- datetime: 日期加时间;
- datetimerange: 日期加时间的范围;
- daterange: 日期范围;
- monthrange: 月份范围;

**pickerOptions 配置说明**

| 参数           | 说明                                                              | 类型                           | 可选值 | 默认值 |
| :------------- | :---------------------------------------------------------------- | :----------------------------- | :----- | :----- |
| shortcuts      | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[]                       | —      | —      |
| disabledDate   | 设置禁用状态，参数为当前日期，要求返回 Boolean                    | Function                       | —      | —      |
| cellClassName  | 设置日期的 className                                              | Function(Date)                 | —      | —      |
| firstDayOfWeek | 周起始日                                                          | Number                         | 1 到 7 | 7      |
| onPick         | 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效  | Function({ maxDate, minDate }) | -      | -      |

**Shortcuts 配置说明**

| 参数    | 说明                                                                                                 | 类型     | 可选值 | 默认值 |
| :------ | :--------------------------------------------------------------------------------------------------- | :------- | :----- | :----- |
| text    | 标题文本                                                                                             | string   | —      | —      |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date()) | Function | —      | —      |

**requestModel 属性说明**

| 参数         | 说明                                                                                                                                                | 类型     | 可选参数 | 默认值 |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- | :----- |
| requestFn    | 请求方法，封装好的 Promise 方法                                                                                                                     | function | -        | -      |
| requestData  | 处理请求参数                                                                                                                                        | function | -        | -      |
| responseData | 处理返回参数，这里需要处理成object数据返回。code=0,组件才会认为成功，进行下一步动作；code=1，组件会提示用户，停止界面交互；msg是成功/失败的提示内容 | string   | -        | -      |

## 未完善部分
> 富文本已经实现，由于安装包过大的问题，且不常用。这里暂不放出来。后期看需要再说。
# End