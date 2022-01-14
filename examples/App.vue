<template>
  <div class="test">
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
    <!-- 此处自定义弹窗，非必要 -->
    <div>
      <el-dialog
        title="自定义对话框"
        :destroy-on-close="true"
        :visible.sync="isShowDialog"
        :close-on-click-modal="false"
      >
        <div>自定义内容</div>
        <br />
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button @click="isShowDialog = false">确定</el-button>
      </el-dialog>
      <el-dialog
        title="预览"
        :destroy-on-close="true"
        :visible.sync="isShowPreview"
        :close-on-click-modal="false"
      >
        <div>我是预览内容</div>
        <br />
        <el-button @click="isShowPreview = false">取消</el-button>
        <el-button @click="isShowPreview = false">确定</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import { Integration } from 'mason-store/lib/mason-store.umd'
// import 'mason-store/lib/mason-store.css'
import { Integration } from "../mason-store/index";
import "../mason-store/styles/index.css";
// import { Integration } from "../lib/mason-store.umd";
// import "../lib/mason-store.css";
import * as requestModel from "./api";
// 数据字段 - 性别
const genderOption = [
  {
    label: "男",
    value: "0",
  },
  {
    label: "女",
    value: "1",
  },
  {
    label: "保密",
    value: "2",
  },
];

export default {
  name: "App",
  components: { Integration },
  data() {
    return {
      isShowDialog: false, // 自定义对话框，非必须
      isShowPreview: false, // 自定义预览，非必须
      asyncComponent: true, // 异步组件，在准备就绪再显示，主要配合数据字典使用。
      // 按钮配置
      requestConf: [
        // 新增
        {
          name: "add",
          type: "main",
          label: "新增",
          icon: "el-icon-plus",
          isShow: (item) => true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminAdd,
            requestData: (request) => request,
            responseData: (response) => {
              let res = {};
              if (response.code === 0) {
                res = { code: 0, msg: response.msg };
              } else {
                res = { code: 1, msg: response.msg };
              }
              return res;
            },
          },
        },
        // 查询
        {
          name: "search",
          type: "search",
          label: "查询",
          icon: "el-icon-search",
          isShow: (item) => true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminList,
            requestData: (request) => {
              let req = {};
              Object.keys(request).forEach((name) => {
                if (name !== "releaseTime") {
                  req[name] = request[name];
                }
              });
              if (request.columns) {
                req.engFirstColumn = request.columns[0];
                req.engSecondColumn = request.columns[1];
              }
              return req;
            },
            responseData: (response) => {
              let res = {};
              if (response.code === 0) {
                response.data.list.forEach((e, index) => {
                  e.contentTxt = e.content;
                  // 设置状态
                  e.infoRelStatusL = [];
                  if (e.infoRelStatus == "0") {
                    e.infoRelStatusL[0] = {
                      label: "未发布",
                      type: "danger",
                    };
                  } else if (e.infoRelStatus == "1") {
                    e.infoRelStatusL[0] = {
                      label: "已发布",
                      type: "success",
                    };
                  } else if (e.infoRelStatus == "2") {
                    e.infoRelStatusL[0] = {
                      label: "已下线",
                      type: "info",
                    };
                  } else {
                    e.infoRelStatusL[0] = {
                      label: "未知状态",
                      type: "",
                    };
                  }
                  // 文章类型
                  e.infoTypeL = [];
                  if (e.infoType == "a") {
                    e.infoTypeL[0] = {
                      label: "公告",
                      type: "danger",
                    };
                  } else if (e.infoType == "b") {
                    e.infoTypeL[0] = {
                      label: "论坛",
                      type: "success",
                    };
                  } else if (e.infoType == "c") {
                    e.infoTypeL[0] = {
                      label: "文章",
                      type: "",
                    };
                  } else {
                    e.infoTypeL[0] = {
                      label: "未知状态",
                      type: "info",
                    };
                  }
                  e.infoTopRelStatusL = [];
                  if (e.infoTopRelStatus == "0") {
                    e.infoTopRelStatusL[0] = {
                      label: "否",
                      type: "",
                    };
                  } else if (e.infoTopRelStatus == "1") {
                    e.infoTopRelStatusL[0] = {
                      label: "是",
                      type: "danger",
                    };
                  } else {
                    e.infoTopRelStatusL[0] = {
                      label: "未知",
                      type: "info",
                    };
                  }
                  e.infoImgsT = [...(e.infoImgs || [])];
                });
                res = {
                  code: 0,
                  list: response.data.list,
                  total: response.data.total,
                  msg: response.msg,
                };
              } else {
                res = {
                  code: 1,
                  msg: response.msg,
                };
              }
              return res;
            },
          },
        },
        // 编辑
        {
          name: "update",
          type: "table",
          label: "编辑",
          icon: "el-icon-edit",
          isShow: (item) => true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminEdit,
            requestData: (req) => req,
            responseData: (response) => {
              let res = {};
              if (response.code === 0) {
                res = { code: 0, msg: response.msg };
              } else {
                res = { code: 1, msg: response.msg };
              }
              return res;
            },
          },
          queryOneModel: {
            requestFn: requestModel.sysmanageAdminQueryOne,
            requestData: (request) => ({ infoId: request.infoId }),
            responseData: (response) => {
              let res = response;
              if (res.code === 0) {
                res = {
                  code: 0,
                  data: response.data.list[0],
                  msg: response.msg,
                };
              }
              return res;
            },
          },
        },
        // 删除
        {
          name: "delete",
          type: "table",
          label: "删除",
          icon: "el-icon-delete",
          isShow: (item) => true,
          remindWinConf: (item) => ({
            title: '修改是否置顶状态！',
            msg: `您确定要删除这条数据？`,
            code: 'switch'
          }),
          isShowRemindWin: true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminDelete,
            requestData: (request) => ({ infoId: request.infoId }),
            responseData: (response) => {
              let res = response;
              if (res.code === 0) {
                res = {
                  code: 0,
                  msg: response.msg,
                };
              }
              return res;
            },
          },
        },
        // 发布状态
        {
          name: "switch",
          type: "table",
          label: "发布状态",
          prop: "infoSketch",
          icon: "el-icon-delete",
          isShow: (item) => true,
          remindWinConf: (item) => {
            console.log(item)
            const state = item.infoSketch
            return {
              title: '操作提示！',
              msg: `您确定要${state == '0' ? '禁用' : state == '1' ? '启用' : '操作'
                }这条数据？`,
              code: 'switch',
            }
          },
          isShowRemindWin: true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminDelete,
            requestData: (request) => ({
              infoId: request.infoId,
              infoSketch: request.infoSketch,
              type: 'top',
            }),
            responseData: (response) => {
              let _res = {}
              if (response.code === 0) {
                _res = { code: 0, msg: response.msg }
              } else {
                _res = { code: 1, msg: response.msg }
              }
              return _res
            },
          },
        },
        // 上传图片
        {
          name: "upload",
          type: "dialog",
          label: "上传图片",
          requestModel: {
            requestFn: requestModel.uploadOnePhotoUrl(),
            uploadName: "file",
            uploadHeaders: requestModel.uploadHeaders(), // 上传头部数据
            responseData: (response) => {
              let res = {};
              if (response.code === 0) {
                res = {
                  code: 0,
                  msg: response.msg,
                  path: response.data.url,
                  data: response.data,
                };
              } else {
                res = { code: 1, msg: response.msg };
              }
              return res;
            },
          },
        },
      ],
      // 表格配置
      tableConf: [
        { label: "封面图片", prop: "infoImgsT", type: "img" },
        { label: "文章标题", prop: "infoTitle", width: 200 },
        { label: "点赞数", prop: "infoLikesNumber", width: 60 },
        { label: "评论数", prop: "infoDiscussNumber", width: 60 },
        { label: "发布状态", prop: "infoRelStatusL", type: "tag", width: 90 },
        { label: "文章类型", prop: "infoTypeL", type: "tag", width: 90 },
        { label: "是否置顶", prop: "infoTopRelStatusL", type: "tag" },
        { label: "创建时间", prop: "createDate" },
        { label: "更新时间", prop: "updateDate" },
        { label: "发布时间", prop: "infoReleaseTime" },
        { label: "备注", prop: "infoRemarks" },
        {
          label: "发布状态",
          type: "switch",
          prop: "infoSketch",
          activeValue: "1",
          inactiveValue: "2",
          width: 140,
          fiexd: "right",
        },
        { label: "操作", type: "operation", width: 280, fiexd: "right" },
      ],
      // 表单配置
      formConf: [
        { label: "文章标题", prop: "infoTitle", maxlength: 60, span: 8 },
        {
          label: "文章类型",
          prop: "infoType",
          type: "select",
          option: genderOption,
          span: 16,
        },
        {
          label: "发布状态",
          prop: "infoRelStatus",
          type: "select",
          option: genderOption,
        },
        {
          label: "发布时间",
          prop: "infoReleaseTime",
          type: "date",
          dateType: "date",
          format: "yyyy-MM-dd HH:mm:ss",
          span: 12,
        },
        {
          label: "备注",
          prop: "infoRemarks",
          searchHidden: true,
          maxlength: 200,
          span: 12,
        },
        {
          label: "封面图片",
          prop: "infoImgs",
          type: "img",
          searchHidden: true,
        },
        { label: "文章内容", type: "richtext", prop: "infoContent", limit: 3 },
      ],
    };
  },
  methods: {
    onPreview(data) {
      console.log(data);
      this.isShowPreview = true;
    },
  },
};
</script>

<style scoped>
.main-buts {
  margin-left: 10px;
}
</style>
