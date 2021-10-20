<template>
  <div class="general">
    <!-- 查询条件 -->
    <div class="general-seek">
      <div class="seek-buttons">
        <span v-for="(item, index) in modelConf.mainButton" :key="index">
          <el-button
            size="mini"
            type="primary"
            plain
            :icon="item.icon ? item.icon : 'el-icon-plus'"
            @click="onTableButFn(false, item)"
            v-show="item.type === 'add'"
            v-if="item.isShow !== false"
          >
            {{ item.label }}
          </el-button>
          <el-button
            size="mini"
            type="primary"
            plain
            :icon="item.icon ? item.icon : 'el-icon-plus'"
            @click="onShowTopSort(item)"
            v-show="item.type === 'topSort'"
            v-if="item.isShow !== false"
          >
            {{ item.label }}
          </el-button>
        </span>
        <slot name="mainbuts"></slot>
      </div>
      <el-form :inline="true" :model="seekData" class="seek-condition">
        <div class="seek-form-box" v-for="(item, index) in modelConf.seekConfig" :key="index">
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
          <el-form-item :label="item.label" v-else-if="item.type === 'select'">
            <el-select
              v-model="seekData[item.prop]"
              :placeholder="'请选择' + item.label"
              size="mini"
              filterable
              :clearable="true"
            >
              <el-option v-for="item in item.option" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </div>
        <el-form-item class="seek-form-box">
          <el-button
            v-for="(item, index) in modelConf.mainButton"
            :key="index"
            size="mini"
            type="primary"
            plain
            :icon="item.icon ? item.icon : 'el-icon-search'"
            :loading="isReqLoading"
            @click="seekDataFn(item)"
            v-if="item.isShow !== false && item.type == 'query'"
          >
            {{ item.label }}
          </el-button>
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
                v-else-if="item.type == 'image' || item.type == 'images' || item.type == 'img'"
                style="width: 100%; height: auto"
                :src="scope.row[item.prop][0]"
                fit="contain"
              >
              </el-image>
              <div v-else-if="item.type === 'operation'">
                <div v-for="(item, index) in item.buttons" :key="index" class="table-but">
                  <div placement="top" effect="light" v-if="item.type === 'button' && item.isShow(scope.row)">
                    <!-- <div slot="content">{{ item.label }}</div> -->
                    <el-button
                      :icon="item.icon"
                      type="primary"
                      size="mini"
                      plain
                      @click="onTableButFn(scope.row, item)"
                    >
                      {{ item.label }}
                    </el-button>
                  </div>
                </div>
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
        <el-dialog :title="remindWinConf.title" :visible.sync="centerDialogVisible" width="30%" center>
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
      />
    </div>
  </div>
</template>

<script>
import WindowModule from './module/dialog.vue' // 新增＆编辑
import { setModelConf } from './index'

export default {
  name: 'GeneralModel',
  props: ['data', 'fieldConfig'],
  computed: {},
  components: { WindowModule },
  data() {
    return {
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
      previewData: {
        title: '',
        data: '',
        isShow: false,
      },
      topSort: {
        isShow: false,
        title: '置顶排序',
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
        title: '',
        msg: '',
        code: '',
      },
    }
  },
  computed: {
    modelConf() {
      return setModelConf(this.data)
    },
  },
  methods: {
    onShowTopSort(item) {
      this.topSort.isShow = true
      this.topSort.butConf = item
      this.topSortApi = item.requestModel
    },
    // 查询 - 按钮
    seekDataFn(item) {
      this.seekData = { ...this.seekData }
      this.seekData.pageNum = 1
      this.isReqLoading = true
      this.getListDataFn(this.seekData)
    },
    // 获取数据
    getListDataFn(seekData) {
      const api = this.modelConf.mainButton.filter((item) => item.type === 'query')[0].requestModel
      let queryData = api.requestData(seekData)
      api
        .requestFn(queryData)
        .then(async (Response) => {
          const res = api.responseData(Response)
          this.isReqLoading = false // 查询等待
          if (res.code === 0) {
            this.pageTotal = res.total
            this.tableData = res.list
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'error',
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    // 列表组件 - 修改
    onTableButFn(item, butConf) {
      this.modelConf.butRequestModel = butConf.requestModel
      if (butConf.code === 'edit') {
        this.addOrSet = 2
        this.isShowWindow = true
        this.dialogFormData = Object.assign({}, item)
      } else if (butConf.code === 'add') {
        this.addOrSet = 1
        this.isShowWindow = true
        this.dialogFormData = Object.assign({}, this.modelConf.formData)
      } else if (butConf.code === 'preview') {
        this.previewData = {
          title: '预览',
          isShow: true,
          data: item,
          butConf: butConf,
        }
      } else if (butConf.isShowRemindWin !== false) {
        this.centerDialogVisible = true
        this.remindWinData = item
        this.remindWinConf = butConf.remindWinConf
      }
    },
    // 表格选择监听
    selectFn(data) {
      this.selectTableData = data
    },
    // 批量处理
    getSelectTableDataFn() {
      if (this.selectTableData.length === 0) {
        this.$message({
          showClose: true,
          message: '请选择需要批量处理的数据',
          type: 'error',
        })
      } else {
        this.$emit('batchList', this.selectTableData)
      }
    },
    // 弹窗 - 确定
    confirmDeleteFn() {
      const brModel = this.modelConf.butRequestModel
      if (brModel) {
        const { requestFn, responseData, requestData } = brModel
        requestFn(requestData(this.remindWinData)).then(async (res) => {
          const _res = await responseData(res)
          if (_res.code === 0) {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'success',
            })
            this.getListDataFn(this.seekData)
            this.centerDialogVisible = false
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'error',
            })
          }
        })
      }
    },
    // 弹窗 - 取消删除
    cancelDeleteFn() {
      this.centerDialogVisible = false
      this.$message({
        showClose: true,
        message: '取消操作',
      })
    },
    // 分页组件 - 每页数量
    handleSizeChange(val) {
      this.seekData['pageSize'] = val
      this.getListDataFn(this.seekData)
    },
    // 分页组件 - 当前页面
    handleCurrentChange(val) {
      this.seekData['pageNum'] = val
      this.getListDataFn(this.seekData)
    },
    // 弹窗组件 - 关闭
    getWindowCancelFn(windowChiData) {
      this.isShowWindow = windowChiData
    },
    // 刷新列表
    setTableList(data) {
      if (data === true) {
        this.getListDataFn(this.seekData)
      }
    },
  },
  created() {
    this.getListDataFn(this.seekData)
  },
}
</script>
