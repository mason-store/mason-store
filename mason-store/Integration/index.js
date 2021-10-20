export const setModelConf = (data) => {
  let config = {
    ...{
      tableConfig: data.tabelConf,// 常规列表
      seekConfig: [],// 查询配置
      formConfig: [],// 表单配置
      formRules: {},// 表单验证
      formData: {},// 表单数据
    },
    ...data
  }
  data.formConf.forEach((item) => {
    if (item.isSeek !== false) {
      // 搜索区配置
      config.seekConfig.push({
        label: item.label,
        type: item.type ? item.type : "text",
        prop: item.prop,
        maxlength: item.maxlength ? item.maxlength : 32,
        option: item.option,
        dateType: item.dateType || "",
        pickerOptions: item.pickerOptions,
      });
    }
    // 表单配置
    if (item.isForm !== false) {
      config.formConfig.push({
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
        span: item.span || 24
      });
      config.formRules[item.prop] = [
        {
          required: item.required === false ? false : true,
          message: item.label + "不能为空",
          trigger: item.trigger,
        },
      ];
      config.formData[item.prop] = item.type == 'img' ? [] : "";
    }
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
