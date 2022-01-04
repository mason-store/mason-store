<template>
  <div class="general-dialog">
    <el-dialog
      width="80%"
      :title="winText"
      :destroy-on-close="true"
      :visible.sync="showFormBox"
      :close-on-click-modal="false"
      @close="closeFn"
    >
      <div>
        <el-form
          ref="winFormData"
          :label-width="modelConf.viewConf.formLabelWidth"
          class="seek-ruleForm"
          :model="winFormData"
          :rules="modelConf.formRules"
        >
          <el-row>
            <el-col
              :span="item.span"
              v-for="(item, index) in modelConf.formConfig"
              :key="index"
            >
              <div v-if="item.type === 'form-title'">
                <el-divider>{{ item.label }}</el-divider>
              </div>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'text' || item.type === 'textarea'"
              >
                <el-input
                  v-model="winFormData[item.prop]"
                  :placeholder="'请输入' + item.label"
                  show-word-limit
                  clearable
                  size="mini"
                  :type="item.type ? item.type : 'text'"
                  :maxlength="item.maxlength"
                  :disabled="
                    (winText === '新增' && item.isAddPermit === false) ||
                    (winText === '编辑' && item.isEditPermit === false)
                      ? true
                      : false
                  "
                />
              </el-form-item>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'radio'"
              >
                <el-radio
                  v-model="winFormData[item.prop]"
                  size="mini"
                  v-for="item in item.option"
                  :key="item.value"
                  :label="item.value"
                  >{{ item.label }}</el-radio
                >
              </el-form-item>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'select' || item.type === 'select_multiple'"
              >
                <el-select
                  v-model="winFormData[item.prop]"
                  :placeholder="'请选择' + item.label"
                  size="mini"
                  filterable
                  :remote="item.isRemote"
                  :remote-method="remoteMethod"
                  :loading="loading"
                  :multiple="item.type == 'select_multiple'"
                  :clearable="true"
                  :disabled="
                    (winText === '新增' && item.isAddPermit === false) ||
                    (winText === '编辑' && item.isEditPermit === false)
                      ? true
                      : false
                  "
                >
                  <el-option
                    v-for="item in item.option"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                  <el-pagination
                    v-if="item.isRemote"
                    class="select-page"
                    :current-page="seekData.pageNum"
                    :page-sizes="[10, 30, 50, 100]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageTotal"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'date'"
              >
                <el-date-picker
                  v-model="winFormData[item.prop]"
                  :type="item.dateType"
                  :placeholder="'选择' + item.label"
                  size="mini"
                  range-separator="至"
                  :start-placeholder="'开始' + item.label"
                  :end-placeholder="'结束' + item.label"
                  :picker-options="item.pickerOptions"
                  :value-format="item.valueFormat"
                  :format="item.format"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'richtext'"
              >
                <Tinymce
                  v-model="winFormData[item.prop]"
                  :config="item"
                  :requestModel="item.requestModel"
                  :height="800"
                />
              </el-form-item>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'cascader'"
              >
                <el-cascader
                  v-model="winFormData[item.prop]"
                  :clearable="true"
                  size="mini"
                  :placeholder="'请选择' + item.label"
                  :options="item.option"
                  filterable
                ></el-cascader>
              </el-form-item>
              <el-form-item
                :label="item.label"
                :prop="
                  (winText === '新增' && item.isAddPermit === false) ||
                  (winText === '编辑' && item.isEditPermit === false)
                    ? ''
                    : item.prop
                "
                v-if="item.type === 'img'"
                class="img-upload-box"
              >
                <div
                  v-for="(imgItem, imgIndex) in winFormData[item.prop]"
                  :key="imgIndex"
                  class="dialog-img"
                >
                  <el-image
                    :preview-src-list="winFormData[item.prop]"
                    :z-index="imgIndex + 1"
                    :src="imgItem"
                  />
                  <span
                    class="cancel"
                    @click="onRemoveImgItem(item.prop, imgIndex)"
                  >
                    ×
                  </span>
                </div>
                <el-upload
                  class="picture dialog-img"
                  list-type="picture-card"
                  accept=".jpg, .png"
                  :name="item.requestModel.uploadName"
                  :action="item.requestModel.requestFn"
                  :auto-upload="true"
                  :show-file-list="false"
                  :headers="item.requestModel.uploadHeaders"
                  :on-success="
                    (response, file, fileList) =>
                      handleUploadSuc(item, response, file, fileList)
                  "
                  :before-upload="
                    (response, file, fileList) =>
                      handleBeforeUpload(item, response, file, fileList)
                  "
                  v-if="
                    winFormData[item.prop]
                      ? winFormData[item.prop].length < item.limit
                        ? true
                        : false
                      : false
                  "
                >
                  <el-button
                    size="mini"
                    plain
                    type="primary"
                    :loading="uploadLoadin"
                  >
                    上传图片
                  </el-button>
                </el-upload>
              </el-form-item>
            </el-col>
            <slot name="form"></slot>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeFn" size="mini"> 取消 </el-button>
        <el-button
          plain
          type="primary"
          size="mini"
          :disabled="buttonAct"
          :loading="buttonAct"
          @click="confirmFn('winFormData')"
        >
          确定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tinymce from "../../components/Tinymce/index.vue";
export default {
  name: "general-dialog",
  components: { Tinymce },
  props: ["showWindow", "formData", "addOrSet", "modelConf"],
  data() {
    return {
      buttonAct: false, // 激活按钮
      showFormBox: false, // 子组件 - 显示状态
      resumeBeginDate: [], // 时间范围
      winFormData: {}, // 弹窗表单
      formDataName: "", // TS 类型转换
      winText: "-", // 弹窗文字
      uploadLoadin: false, // 上传图片等待
      loading: false,
      seekData: {
        pageNum: 1,
        pageSize: 10,
      },
      pageTotal: 0,
    };
  },
  watch: {
    showWindow: {
      handler(val, oldVal) {
        this.showFormBox = val;
        // 监听父组件显示状态，关联子组件显示状态。避免修改到父组件的值
        if (val === true) {
          // 重置验证
          this.formDataName = this.$refs["winFormData"];
          if (this.formDataName) {
            this.formDataName.resetFields();
          }
          // 新增 - 编辑
          if (this.addOrSet === 1) {
            this.winText = "新增";
            this.winFormData = { ...this.formData };
          } else if (this.addOrSet === 2) {
            this.winText = "编辑";
            this.winFormData = { ...this.formData };
          }
        } else if (val === false) {
        }
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * 上传图片成功
     */
    async handleUploadSuc(item, response, file, list) {
      const res = item.requestModel.responseData(response);
      if (res.code === 0) {
        this.winFormData[item.prop] = this.winFormData[item.prop] || [];
        this.winFormData[item.prop] = [
          ...this.winFormData[item.prop],
          ...[res.path],
        ];
        this.uploadLoadin = false;
        this.$message({
          showClose: true,
          message: res.msg || "上传成功",
          type: "success",
        });
      } else {
        this.$message({
          showClose: true,
          message: res.msg || "上传失败",
          type: "error",
        });
      }
    },
    /**
     * 分页组件 - 每页数量
     */
    handleSizeChange(val) {
      this.seekData["pageSize"] = val;
      this.remoteMethod(this.remoteVal);
    },
    /**
     * 分页组件 - 当前页面
     */
    handleCurrentChange(val) {
      this.seekData["pageNum"] = val;
      this.remoteMethod(this.remoteVal);
    },
    /**
     * 上传之前
     */
    handleBeforeUpload(item) {
      if (this.winFormData[item.prop]) {
        if (item.limit <= this.winFormData[item.prop].length) {
          this.$message({
            showClose: true,
            message: `只能上传${item.limit}张图片`,
            type: "error",
          });
          return false;
        } else {
          this.uploadLoadin = true;
          return true;
        }
      } else {
        return true;
      }
    },
    /**
     * 移除图片
     */
    onRemoveImgItem(data, index) {
      this.winFormData[data].splice(index, 1);
    },
    /**
     * 弹窗组件 - 提交表单
     */
    async setDataFn(data) {
      if (this.addOrSet === 1) {
        // 新增
        let queryData = await this.modelConf.butRequestModel.requestData(
          data,
          this.modelConf
        );
        if (queryData === false) return;
        this.buttonAct = true;
        this.modelConf.butRequestModel
          .requestFn(queryData)
          .then((Response) => {
            this.buttonAct = false;
            let res = this.modelConf.butRequestModel.responseData(Response);
            if (res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "success",
              });
              this.$emit("setTableList", true);
              this.$emit("winCancelFn", false);
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (this.addOrSet === 2) {
        // 编辑
        let queryData = await this.modelConf.butRequestModel.requestData(
          data,
          this.modelConf
        );
        if (queryData === false) return;
        this.buttonAct = true;
        this.modelConf.butRequestModel
          .requestFn(queryData)
          .then((Response) => {
            this.buttonAct = false;
            let res = this.modelConf.butRequestModel.responseData(Response);
            if (res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "success",
              });
              this.$emit("setTableList", true);
              this.$emit("winCancelFn", false);
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    /**
     * 远程搜索
     */
    remoteMethod(val) {
      this.remoteVal = val;
      if (this.loading === false) {
        const arr = this.modelConf.formConfig.filter(
          (item) => item.type === "select" && item.isRemote === true
        );
        if (arr.length > 0) {
          this.loading = true;
          const api = arr[0].requestModel;
          const queryData = api.requestData({
            ...{ remoteValue: val },
            ...this.winFormData,
            ...this.seekData,
          });
          if (queryData !== false) {
            api.requestFn(queryData).then((response) => {
              const res = api.responseData(response);
              arr[0].option = res.list;
              this.pageTotal = res.total;
              this.loading = false;
            });
          } else {
            this.loading = false;
          }
        }
      }
      return [];
    },
    /**
     * 按钮 - 确定
     */
    confirmFn(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.setDataFn(this.winFormData);
        } else {
          this.$message({
            showClose: true,
            message: "请检查输入内容！",
            type: "error",
          });
          return false;
        }
      });
    },
    /**
     * 按钮 - 关闭
     */
    closeFn() {
      this.$emit("winCancelFn", false);
    },
  },
};
</script>
