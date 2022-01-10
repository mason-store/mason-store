<template>
  <div class="general">
    <!-- 查询条件 -->
    <div class="general-seek">
      <div class="seek-buttons">
        <span v-for="(item, index) in modelConf.requestConf" :key="index">
          <el-button
            size="mini"
            type="primary"
            plain
            :icon="item.icon ? item.icon : 'el-icon-plus'"
            @click="onDialogForm(false, item)"
            v-if="item.type === 'main' && item.name === 'add' && item.isShow"
          >
            {{ item.label }}
          </el-button>
        </span>
        <slot name="mainbuts"></slot>
      </div>
      <el-form
        :inline="true"
        :model="seekData"
        ref="searchForm"
        class="seek-condition"
        v-loading="isSearchLoading"
      >
        <div
          class="seek-form-box"
          v-for="(item, index) in modelConf.formConfig"
          :key="index"
        >
          <div v-if="item.searchHidden !== true">
            <el-form-item :label="item.label" v-if="item.type === 'date'">
              <el-date-picker
                v-model="seekData[item.prop]"
                :type="item.dateType"
                :placeholder="'选择' + item.label"
                size="mini"
                range-separator="至"
                :start-placeholder="'开始' + item.label"
                :end-placeholder="'结束' + item.label"
                :picker-options="item.pickerOptions"
                :value-format="item.format"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item :label="item.label" v-if="item.type === 'cascader'">
              <el-cascader
                v-model="seekData[item.prop]"
                :clearable="true"
                size="mini"
                :placeholder="'请选择' + item.label"
                :options="item.option"
                filterable
              ></el-cascader>
            </el-form-item>
            <el-form-item :label="item.label" v-else-if="item.type === 'text'">
              <el-input
                v-model="seekData[item.prop]"
                clearable
                show-word-limit
                size="mini"
                :maxlength="item.maxlength"
                :placeholder="'请输入' + item.label"
              />
            </el-form-item>
            <el-form-item
              :label="item.label"
              v-else-if="item.type === 'select'"
            >
              <el-select
                v-model="seekData[item.prop]"
                :placeholder="'请选择' + item.label"
                size="mini"
                filterable
                :clearable="true"
              >
                <el-option
                  v-for="item in item.option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </div>
        <el-form-item class="seek-form-box">
          <span v-for="(item, index) in modelConf.requestConf" :key="index">
            <el-button
              size="mini"
              type="primary"
              plain
              :icon="item.icon ? item.icon : 'el-icon-search'"
              :loading="isReqLoading"
              @click="seekDataFn(item)"
              v-if="item.type === 'search' && item.isShow"
            >
              {{ item.label }}
            </el-button>
          </span>
          <span>
            <el-button
              @click="resetForm('searchForm')"
              size="mini"
              icon="el-icon-refresh-left"
              class="reset-form-but"
              plain
            >
              重置
            </el-button>
          </span>
        </el-form-item>
      </el-form>
    </div>
    <!-- 列表内容 -->
    <div class="general-table">
      <div class="table">
        <el-table
          :data="tableData"
          :border="true"
          size="mini"
          style="width: 100%"
          :max-height="modelConf.viewConf.tableMaxHeight"
          @selection-change="selectFn"
          v-loading="isTableLoading"
        >
          <el-table-column type="selection" width="40" />
          <el-table-column
            show-overflow-tooltip
            v-for="(item, index) in modelConf.tableConfig"
            :key="index"
            :sortable="item.isSortable"
            :label="item.label"
            :width="item.width"
            :prop="item.prop"
            :fixed="item.fiexd"
          >
            <template slot-scope="scope">
              <div v-if="item.type == 'tag'">
                <el-tag
                  v-for="(tagItem, tagIndex) in scope.row[item.prop]"
                  :key="tagIndex"
                  :type="tagItem.type"
                  class="common-table-tag"
                >
                  {{ tagItem.label }}
                </el-tag>
              </div>
              <el-image
                v-else-if="item.type == 'img'"
                style="width: 100%; height: auto"
                :src="scope.row[item.prop][0]"
                fit="contain"
              >
              </el-image>
              <el-switch
                v-else-if="item.type == 'switch'"
                style="display: block"
                :key="index"
                v-model="scope.row[item.prop]"
                :active-text="item.activeText"
                :inactive-text="item.inactiveText"
                :active-value="item.activeValue"
                :inactive-value="item.inactiveValue"
                :active-color="item.activeColor"
                :inactive-color="item.inactiveColor"
                @change="
                  (index) =>
                    onDialogForm(scope.row, getReqCof(item.prop), index, item)
                "
              />
              <div v-else-if="item.type === 'operation'">
                <div
                  v-for="(butItem, index) in modelConf.requestConf"
                  :key="index"
                  class="table-but"
                >
                  <div
                    placement="top"
                    effect="light"
                    v-if="
                      butItem.type === 'table' &&
                      butItem.isShow(scope.row) &&
                      !butItem.prop
                    "
                  >
                    <!-- <div slot="content">{{ butItem.label }}</div> -->
                    <el-button
                      :icon="butItem.icon"
                      type="primary"
                      size="mini"
                      plain
                      @click="onDialogForm(scope.row, butItem)"
                    >
                      {{ butItem.label }}
                    </el-button>
                  </div>
                </div>
                <slot name="operation" :row="scope.row"></slot>
              </div>
              <div v-else>{{ scope.row[item.prop] }}</div>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination
            :current-page="seekData.pageNum"
            :page-sizes="[10, 30, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageTotal"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
        <el-dialog
          :title="remindWinConf.title"
          :visible.sync="centerDialogVisible"
          width="30%"
          center
        >
          <span>{{ remindWinConf.msg }}</span>
          <span slot="footer" class="dialog-footer">
            <el-button size="mini" @click="cancelDeleteFn"> 取消 </el-button>
            <el-button
              type="primary"
              plain
              size="mini"
              :disabled="isReqLoading"
              :loading="isReqLoading"
              @click="confirmDeleteFn()"
            >
              确定
            </el-button>
          </span>
        </el-dialog>
      </div>
    </div>
    <!-- 新增编辑 -->
    <div class="general-window">
      <WindowModule
        :show-window="isShowWindow"
        :form-data="dialogFormData"
        :add-or-set="addOrSet"
        :modelConf="modelConf"
        @winCancelFn="getWindowCancelFn"
        @setTableList="setTableList"
      >
        <template slot="dialogForm" slot-scope="data">
          <slot name="dialogForm" :formData="data.formData"></slot>
        </template>
        <template slot="dialogButton" slot-scope="data">
          <slot name="dialogButton" :formData="data.formData"></slot>
        </template>
      </WindowModule>
    </div>
  </div>
</template>

<script>
import WindowModule from "./module/dialog.vue"; // 新增＆编辑
import { setModelConf } from "./index";

export default {
  name: "GeneralModel",
  props: {
    requestConf: { type: Array, default: () => [] },
    tableConf: { type: Array, default: () => [] },
    formConf: { type: Array, default: () => [] },
  },
  computed: {},
  components: { WindowModule },
  data() {
    return {
      isSearchLoading: false, // 是否负载搜索区
      isTableLoading: false, // 是否负载表格
      tableData: [], // 列表内容
      isShowWindow: false, // 弹窗状态
      pageTotal: 0, // 数据总数
      addOrSet: 0, // 新增或者编辑 0：默认 - 1：新增 - 2：编辑
      centerDialogVisible: false, // 确定删除
      remindWinData: {}, // 提示框数据
      selectTableData: [], // 批量处理索引
      isReqLoading: false, // 查询等待
      roleList: [],
      dialogFormData: {},
      topSort: {
        isShow: false,
        title: "置顶排序",
        data: [],
        butConf: {},
      },
      topSortApi: {},
      // 查询 - 条件
      seekData: {
        pageNum: 1,
        pageSize: 10,
      },
      remindWinConf: {
        title: "",
        msg: "",
        code: "",
      },
    };
  },
  computed: {
    modelConf() {
      return setModelConf({
        requestConf: this.requestConf,
        tableConf: this.tableConf,
        formConf: this.formConf,
      });
    },
  },
  methods: {
    // 查询 - 按钮
    seekDataFn(item) {
      this.seekData = { ...this.seekData };
      this.seekData.pageNum = 1;
      this.isReqLoading = true;
      this.getListDataFn(this.seekData);
    },
    // 获取数据
    getListDataFn(seekData) {
      this.isSearchLoading = true;
      try {
        const api = this.modelConf.requestConf.filter(
          (item) => item.name === "search"
        )[0].requestModel;
        let queryData = api.requestData(seekData);
        api
          .requestFn(queryData)
          .then(async (Response) => {
            this.isSearchLoading = false;
            const res = api.responseData(Response);
            this.isReqLoading = false; // 查询等待
            if (res.code === 0) {
              this.pageTotal = res.total;
              this.tableData = res.list;
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            this.isSearchLoading = false;
            console.error(err);
          });
      } catch (err) {
        console.log(err);
        this.$message({
          showClose: true,
          message: "配置失败，请确保使用正确性！",
          type: "error",
        });
        this.isSearchLoading = false;
      }
    },
    // 重置
    resetForm(formName) {
      this.seekData = {
        pageNum: 1,
        pageSize: 10,
      };
      this.$nextTick(() => {
        this.$refs[formName].resetFields();
      });
    },
    // 列表组件 - 修改
    async onDialogForm(item, requestConf, index, conf) {
      const {
        name, // 名称
        remindWinConf, // 确认框配置
        isShowRemindWin, // 是否有确认框
        requestModel, // 操作数据请求
        queryOneModel, // 查询单条数据请求
      } = requestConf;
      if (name === "update") {
        // 如果有queryOneModel，会进行先进行查询
        if (queryOneModel) {
          this.isTableLoading = true;
          try {
            const requestData = queryOneModel.requestData(item); // 请求数据
            const responseData = await queryOneModel.requestFn(requestData); // 返回数据
            const res = queryOneModel.responseData(responseData); // 返回数据处理
            this.isTableLoading = false;
            if (res.code === 0) {
              this.addOrSet = 2;
              this.isShowWindow = true;
              this.dialogFormData = Object.assign({}, res.data);
              this.modelConf.butRequestModel = requestModel;
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          } catch (err) {
            console.log(err);
            this.$message({
              showClose: true,
              message: "配置失败，请确保使用正确性！",
              type: "error",
            });
            this.isTableLoading = false;
          }
        } else {
          this.addOrSet = 2;
          this.isShowWindow = true;
          this.dialogFormData = Object.assign({}, item);
          this.modelConf.butRequestModel = requestModel;
        }
      } else if (name === "add") {
        this.addOrSet = 1;
        this.isShowWindow = true;
        this.dialogFormData = Object.assign({}, this.modelConf.formData);
        this.modelConf.butRequestModel = requestModel;
      } else if (isShowRemindWin !== false) {
        if (requestConf) this.centerDialogVisible = true;
        this.remindWinData = item;
        const titleConf = {
          title: '操作提示！',
          msg: '您确定要操作这条数据？'
        }
        const dialogConf = typeof remindWinConf == 'function' ? remindWinConf(item) : titleConf
        this.remindWinConf = {
          ...dialogConf,
          requestModel: requestModel,
          switchVal: index
        };
      }
    },
    // 获取请求配置
    getReqCof(val) {
      const reqConf = this.requestConf.filter((e) => e.prop === val);
      if (reqConf.length > 0) return reqConf[0];
      return {};
    },
    // 表格选择监听
    selectFn(data) {
      this.selectTableData = data;
    },
    // 批量处理
    getSelectTableDataFn() {
      if (this.selectTableData.length === 0) {
        this.$message({
          showClose: true,
          message: "请选择需要批量处理的数据",
          type: "error",
        });
      } else {
        this.$emit("batchList", this.selectTableData);
      }
    },
    // 弹窗 - 确定
    confirmDeleteFn() {
      const { requestModel, switchVal } = this.remindWinConf
      if (requestModel) {
        const { requestFn, responseData, requestData } = requestModel;
        requestFn(requestData({ ...this.remindWinData, tableSwitchChangeValue: switchVal }))
          .then(async (res) => {
            const _res = await responseData(res);
            if (_res.code === 0) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "success",
              });
              this.getListDataFn(this.seekData);
              this.centerDialogVisible = false;
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // 弹窗 - 取消删除
    cancelDeleteFn() {
      this.centerDialogVisible = false;
      this.$message({
        showClose: true,
        message: "取消操作",
      });
    },
    // 分页组件 - 每页数量
    handleSizeChange(val) {
      this.seekData["pageSize"] = val;
      this.getListDataFn(this.seekData);
    },
    // 分页组件 - 当前页面
    handleCurrentChange(val) {
      this.seekData["pageNum"] = val;
      this.getListDataFn(this.seekData);
    },
    // 弹窗组件 - 关闭
    getWindowCancelFn(windowChiData) {
      this.isShowWindow = windowChiData;
    },
    // 刷新列表
    setTableList(data) {
      if (data === true) {
        this.getListDataFn(this.seekData);
      }
    },
  },
  created() {
    this.getListDataFn(this.seekData);
  },
};
</script>
