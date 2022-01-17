# mason-store

## 什么是 mason-store

_这里集合了一些实用的模块，便于开发。_

> Integration 综合模块
> 常规业务中，变化最多的无非是字段，接口。此模块解决了常规业务的交互代码，例如弹窗，翻页，布局等一系列东西。你只需关注高频变化的字段、数据格式、接口名称就够啦。

- 优点：复用性高，开发速度快，布局统一。
- 缺点：定制性差，灵活性差，针对性强。
- 建议：常规业务够用，复杂（个性化高）的功能不适合直接使用此模块。如果喜欢这种开发模式，可以直接 copy 源码，单独重写一下呗。

## 快速上手

1. 安装依赖

```bash
# 安装 mason-store
npm install mason-store
# 安装 element-ui （本模块默认使用element-ui)
npm install element-ui
```

2. 引入 mason-store

```JavaScript
import { Integration } from 'mason-store/lib/mason-store.umd'
import 'mason-store/lib/mason-store.css'
export default {
  name: 'App',
  components: { Integration },
  data() {return {}}
}
```

3. 在代码中调用

```html
<!-- 参数说明
  asyncComponent: 开启异步渲染组件
  requestConf: 按钮与请求配置
  tableConf: 表格配置
  formConf: 搜索区域、新增、编辑的表单配置
-->
<template>
  <Integration
    v-if="asyncComponent"
    :requestConf="requestConf"
    :tableConf="tableConf"
    :formConf="formConf"
  >
    <!-- 主按钮区域（即'新增'按钮所在的那块区域） -->
    <template slot="mainbuts">
      <el-button
        class="main-buts"
        @click="isShowDialog = true"
        icon="el-icon-setting"
        size="mini"
        type="primary"
        plain
      >
        自定义按钮
      </el-button>
    </template>
    <!-- 表格操作区域 -->
    <template slot="operation" slot-scope="data">
      <el-button
        class="main-buts"
        @click="onPreview(data)"
        icon="el-icon-setting"
        size="mini"
        type="primary"
        plain
      >
        预览
      </el-button>
    </template>
    <!-- 新增/编辑表单 -->
    <template slot="dialogForm" slot-scope="data">
      <el-form label-width="80px">
        <el-form-item label="描述">
          <el-input
            v-model="data.formData.infoDiscussNumber"
            :placeholder="'请输入描述'"
            show-word-limit
            clearable
            size="mini"
            type="text"
            :maxlength="59"
          />
        </el-form-item>
      </el-form>
    </template>
    <!-- 新增/编辑按钮 -->
    <template slot="dialogButton" slot-scope="data">
      <el-button
        @click="onPreview(data)"
        icon="el-icon-check"
        size="mini"
        type="primary"
        plain
      >
        审核通过
      </el-button>
    </template>
  </Integration>
</template>
```

4. 更多详细配置，请查看示例代码。[点击前往完整源码](https://gitee.com/yuebu/mason-store/blob/master/examples/App.vue)

## 本地调试

```bash
# 把项目包放在一个干净的文件夹里，进行本地调试，了解更多详情内容
# 安装依赖
npm install
# 启动服务器（模拟）
npm run server
# 启动项目
npm run dev
# 主要调试文件examples/App.vue,examples/server/index.js
```

## 参数说明

### **requestConf**

**requestConf**

| 参数            | 说明                                  | 类型     | 可选参数                               | 默认值 |
| :-------------- | :------------------------------------ | :------- | :------------------------------------- | :----- |
| name            | 请求名称                              | string   | add,search,update,delete,switch,upload | -      |
| type            | 位置类型                              | string   | main,search, table,dialog              | -      |
| label           | 按钮名称，upload 和 switch 不需要配置 | string   | -                                      | -      |
| prop            | 字段名称，仅有 switch 需要配置        | string   | -                                      | -      |
| icon            | 图标名称，使用的是 element-ui 的图标  | string   | -                                      | -      |
| isShow          | 是否显示此按钮                        | function | -                                      | -      |
| remindWinConf   | 点击后确认操作的弹窗配置              | function | -                                      | -      |
| isShowRemindWin | 是否需要确认操作的弹窗                | function | -                                      | -      |

| requestModel | 点击此按钮会调用接口，请求配置 | object | - | - |
| queryOneModel | 查询一条数据，点击按钮会直接调用这个方法，一般用于编辑按钮中（查询详情），与 requestModel 一样 | object | - | - |

**requestModel or queryOneModel**

| 参数         | 说明                                                                                                                                                   | 类型     | 可选参数 | 默认值 |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- | :----- |
| requestFn    | 请求方法，封装好的 Promise 方法                                                                                                                        | function | -        | -      |
| requestData  | 处理请求参数                                                                                                                                           | function | -        | -      |
| responseData | 处理返回参数，这里需要处理成 object 数据返回。code=0,组件才会认为成功，进行下一步动作；code=1，组件会提示用户，停止界面交互；msg 是成功/失败的提示内容 | string   | -        | -      |

### **tableConf**

**tabelConf**
| 参数 | 说明 | 类型 | 可选参数 | 默认值 |
| :------ | :------- | :------------ | :----------------------- | :----- |
| label | 表头名称 | string | - | - |
| prop | 对应字段 | string | - | - |
| type | 类型 | string | text,image,tag,switch,operation | text |
| width | 列宽 | number/string | - | - |
| activeValue | switch 开启的值（type 是 switch 的时候才需要配置） | number/string | - | - |
| inactiveValue | switch 关闭的值（type 是 switch 的时候才需要配置） | number/string | - | - |
| fiexd | 位置 | string | left,right | - |

### **formConf**

| 参数          | 说明                               | 类型          | 可选参数                                                                                                                                                         | 默认值 |
| :------------ | :--------------------------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| label         | 名称                               | string        | textarea                                                                                                                                                         | -      |
| type          | 类型                               | string        | text: 输入框;form-title: 表单分割线;textarea: 文本框;radio: 单选;select_multiple: 远程搜索输入框;select: 选择框;img: 图片;richtext: 富文本;cascader: 级联选择器; | text   |
| imagesWidth   | 宽度                               | string        | -                                                                                                                                                                | 120px  |
| prop          | 字段                               | string        | -                                                                                                                                                                | -      |
| maxlength     | 最大长度                           | string/number | -                                                                                                                                                                | 32     |
| option        | 下拉选项                           | object        | -                                                                                                                                                                | -      |
| isAddPermit   | 新增时是否允许输入                 | boolean       | -                                                                                                                                                                | true   |
| isEditPermit  | 修改时是否允许输入                 | boolean       | -                                                                                                                                                                | true   |
| isRemote      | 是否允许远程搜索                   | boolean       | -                                                                                                                                                                | false  |
| required      | 是否必填                           | boolean       | -                                                                                                                                                                | true   |
| limit         | 允许上传图片的数量                 | number        | -                                                                                                                                                                | 1      |
| dateType      | 日期控件类型，例如日期，日期范围等 | string        | year:年;month: 月;date: 标准日期;dates: 多个日期;week: 周;datetime: 日期加时间;datetimerange: 日期加时间的范围;daterange: 日期范围;monthrange: 月份范围;         | date   |
| pickerOptions | 当前时间日期选择器特有的选项       | object        | -                                                                                                                                                                | -      |
| valueFormat   | 日期选择器 - 返回值格式            | string        | -                                                                                                                                                                | -      |
| format        | 日期选择器 - 显示格式              | string        | -                                                                                                                                                                | -      |
| uploadHeaders | 上传文件携带请求头                 | object        | -                                                                                                                                                                | -      |
| span          | 布局                               | string        | -                                                                                                                                                                | -      |

**pickerOptions 日期配置**

| 参数           | 说明                                                              | 类型                           | 可选值 | 默认值 |
| :------------- | :---------------------------------------------------------------- | :----------------------------- | :----- | :----- |
| shortcuts      | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[]                       | —      | —      |
| disabledDate   | 设置禁用状态，参数为当前日期，要求返回 Boolean                    | Function                       | —      | —      |
| cellClassName  | 设置日期的 className                                              | Function(Date)                 | —      | —      |
| firstDayOfWeek | 周起始日                                                          | Number                         | 1 到 7 | 7      |
| onPick         | 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效  | Function({ maxDate, minDate }) | -      | -      |

**Shortcuts 配置说明**

| 参数    | 说明                                                                                                  | 类型     | 可选值 | 默认值 |
| :------ | :---------------------------------------------------------------------------------------------------- | :------- | :----- | :----- |
| text    | 标题文本                                                                                              | string   | —      | —      |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.\$emit('pick', new Date()) | Function | —      | —      |

# End
