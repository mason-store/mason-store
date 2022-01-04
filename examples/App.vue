<template>
  <div class="test">
    <!-- 缺失刷新功能，switch、upload优化，富文本内容没清空 -->
    <Integration
      v-if="asyncComponent"
      :buttonConf="buttonConf"
      :tableConf="tableConf"
      :formConf="formConf"
    >
      <!-- <Integration> -->
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
      <template slot="dialogForm" slot-scope="data">
        <el-form label-width="80px">
          <el-form-item label="描述">
            <el-input
              v-model="data.formData.infoSketch"
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
import * as requestModel from "./api";
import {
  disposeList,
  disposeAdd,
  disposeUpdate,
  disposeDelete,
} from "./App.js";
import axios from "axios";
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
      buttonConf: [
        {
          name: "add",
          type: "main",
          label: "新增",
          icon: "el-icon-plus",
          isShow: (item) => true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminAdd,
            requestData: (req) => disposeAdd.requestParams(req),
            responseData: (res) => disposeAdd.response(res),
          },
        },
        {
          name: "search",
          type: "search",
          label: "查询",
          icon: "el-icon-search",
          isShow: (item) => true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminList,
            requestData: (req) => disposeList.requestParams(req),
            responseData: (res) => disposeList.response(res),
          },
        },
        {
          name: "update",
          type: "table",
          label: "编辑",
          icon: "el-icon-edit",
          isShow: (item) => true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminEdit,
            requestData: (req) => disposeUpdate.requestParams(req),
            responseData: (res) => disposeUpdate.response(res),
          },
        },
        {
          name: "delete",
          type: "table",
          label: "删除",
          icon: "el-icon-delete",
          isShow: (item) => true,
          remindWinConf: {
            title: "删除警告！",
            msg: "您确定要删除这条数据？",
            code: "delete",
          },
          isShowRemindWin: true,
          requestModel: {
            requestFn: requestModel.sysmanageAdminDelete,
            requestData: (req) => disposeDelete.requestParams(req),
            responseData: (res) => disposeDelete.response(res),
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
          activeColor: "",
          inactiveColor: "",
          activeValue: "1",
          inactiveValue: "2",
          activeText: "启用",
          inactiveText: "停用",
          width: 140,
          fiexd: "right",
          requestModel: {
            requestFn: requestModel.sysmanageAdminEdit,
            requestData: async (req, model) => {
              const reqData = {
                infoSketch: req.infoSketch,
                infoId: req.infoId,
              };
              return reqData;
            },
            responseData: (res) => {
              let newRes = {};
              if (res.code === 0) {
                newRes = { code: 0, msg: response.msg };
              } else {
                newRes = { code: 1, msg: response.msg };
              }
              return newRes;
            },
          },
          queryOneData: {
            requestModel: {
              specialValue: [{ value: "content" }],
              requestFn: requestModel.sysmanageAdminEdit,
              requestData: (req) => {
                return { id: req.id };
              },
              responseData: (res) => {
                let _res = {};
                if (res.code === 200) {
                  _res = {
                    code: 0,
                    msg: res.msg,
                    data: res.data,
                  };
                } else {
                  _res = {
                    code: 1,
                    msg: res.msg,
                  };
                }
                return _res;
              },
            },
          },
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
          isSeek: false,
          maxlength: 200,
          span: 12,
        },
        {
          label: "封面图片",
          prop: "infoImgs",
          type: "img",
          isSeek: false,
          requestModel: {
            requestFn: requestModel.uploadOnePhotoUrl(),
            uploadName: "file",
            uploadHeaders: requestModel.uploadHeaders(), // 上传头部数据
            requestData: (req) => {
              return req;
            },
            responseData: (response) => {
              console.log(response);
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
        {
          label: "文章内容",
          type: "richtext",
          prop: "infoContent",
          limit: 3,
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
    };
  },
  methods: {
    onPreview(data) {
      console.log(data);
      this.isShowPreview = true;
    },
  },
  created() {},
};
</script>

<style scoped>
.main-buts {
  margin-left: 10px;
}
</style>
