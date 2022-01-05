export const setModelConf = (data) => {
  let config = {
    ...{
      tableConfig: [],// 常规列表
      formConfig: [],// 表单配置
      formRules: {},// 表单验证
      formData: {},// 表单数据
    },
    ...data
  }
  data.tableConf.map(item => {
    config.tableConfig = [
      ...config.tableConfig,
      {
        activeColor: item.activeColor || "#13ce66", // switch开启颜色
        inactiveColor: item.inactiveColor || "#ff4949", // switch禁用颜色
        activeValue: item.activeValue || '404', // switch启动值
        inactiveValue: item.inactiveValue || '404', // switch禁用值
        activeText: item.activeText || "启用", // switch启动文字
        inactiveText: item.inactiveText || "禁用", // switch禁用颜色
        ...item
      }
    ]
  })
  data.formConf.forEach((item) => {
    const formParamsConf = {
      label: item.label, // 名称
      type: item.type ? item.type : "text", // 类型
      prop: item.prop, // 字段
      maxlength: item.maxlength ? item.maxlength : 32, // 最大长度
      option: item.option, // 下拉选项
      isAddPermit: item.isAddPermit, // 新增时是否允许输入
      isEditPermit: item.isEditPermit, // 修改时是否允许输入
      isRemote: item.isRemote, // 是否允许远程搜索
      required: item.required === false ? false : true, // 是否必填
      limit: item.limit ? item.limit : 1, // 允许上传图片的数量
      dateType: item.dateType || "", // 日期控件类型
      pickerOptions: item.pickerOptions, // 当前时间日期选择器特有的选项参考下表
      requestModel: item.requestModel, // 请求模块
      valueFormat: item.valueFormat || 'yyyy-MM-dd', // 日期选择器 - 返回值格式
      format: item.format || 'yyyy-MM-dd', // 日期选择器 - 显示格式
      searchHidden: item.searchHidden || false, // 搜索区是否隐藏
      dialogHidden: item.dialogHidden || false, // 对话框区是否隐藏
      span: item.span || 24,// 栅格
    }
    // 单独处理图片或富文本上传图片配置
    if (formParamsConf.type === 'img' || formParamsConf.type === 'richtext') {
      const uploadConf = data.requestConf.filter(e => e.type === 'dialog')
      if (uploadConf.length > 0) formParamsConf.requestModel = uploadConf[0].requestModel
    }
    // 表单配置
    config.formConfig = [...config.formConfig, formParamsConf]
    // 表单校验
    config.formRules[item.prop] = [
      {
        required: item.required === false ? false : true,
        message: item.label + "不能为空",
        trigger: item.trigger,
      },
    ];
    // 表单内容
    config.formData[item.prop] = item.type == 'img' ? [] : "";
  });
  if (config.viewConf) {
    config.viewConf.formLabelWidth = config.viewConf.formLabelWidth; // 表单 label 宽度
    config.viewConf.tableMaxHeight = config.viewConf.tableMaxHeight; // 表格最大高度
  } else {
    config.viewConf = {
      formLabelWidth: "80px", // 表单 label 宽度
      tableMaxHeight: "500px", // 表格最大高度
    }
  }
  return config;
}
