<template>
  <div class="test">
    <Integration v-if="isShowView" :data="modelConf">
      <template #mainbuts>
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
    </Integration>
    <div>
      <el-dialog title="自定义弹窗" :destroy-on-close="true" :visible.sync="isShowDialog" :close-on-click-modal="false">
        <div>自定义视图</div>
        <br />
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button @click="isShowDialog = false">确定</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { Integration } from 'mason-store/lib/mason-store.umd'
import 'mason-store/lib/mason-store.css'
import * as requestModel from './api'
import axios from 'axios'
// 数据字段 - 性别
const genderOption = [
  {
    label: '男',
    value: '0',
  },
  {
    label: '女',
    value: '1',
  },
  {
    label: '保密',
    value: '2',
  },
]

export default {
  name: 'App',
  components: { Integration },
  data() {
    return {
      isShowView: true,
      isShowDialog: false,
      // 自定义视图配置
      topSortConf: {
        isShow: false,
        title: '置顶排序',
        data: [],
        butConf: {
          type: 'topSort',
          label: '管理置顶排序',
          icon: 'el-icon-setting',
          code: 'topSort',
          isShow: true,
          tabelConf: [
            { label: '文章类型', prop: 'infoTypeL', type: 'tag', width: 90 },
            { label: '封面图片', prop: 'infoImgsT', type: 'image', width: 100 },
            { label: '文章标题', prop: 'infoTitle' },
            { label: '点赞数', prop: 'infoLikesNumber', width: 60 },
            { label: '评论数', prop: 'infoDiscussNumber', width: 60 },
            {
              label: '发布状态',
              prop: 'infoRelStatusL',
              type: 'tag',
              width: 90,
            },
          ],
        },
        option: genderOption,
        requestModel: {
          code: 'list',
          label: '管理置顶排序-查询',
          // requestFn: requestModel.sysmanageAdminList,
          requestFn: (data) => {
            axios.post({
              url: '/list',
              method: 'post',
              data,
            })
          },
          requestData: (req) => {
            const _req = {
              pageSize: 8,
              pageNum: 1,
              infoType: req.infoType,
            }
            return _req
          },
          responseData: (res) => {
            let _res = {}
            if (res.code === 0) {
              res.data.list.forEach((e, index) => {
                e.contentTxt = e.content
                // 设置状态
                e.infoRelStatusL = []
                if (e.infoRelStatus == '0') {
                  e.infoRelStatusL[0] = {
                    label: '未发布',
                    type: 'danger',
                  }
                } else if (e.infoRelStatus == '1') {
                  e.infoRelStatusL[0] = {
                    label: '已发布',
                    type: 'success',
                  }
                } else if (e.infoRelStatus == '2') {
                  e.infoRelStatusL[0] = {
                    label: '已下线',
                    type: 'info',
                  }
                } else {
                  e.infoRelStatusL[0] = {
                    label: '未知状态',
                    type: '',
                  }
                }
                // 文章类型
                e.infoTypeL = []
                if (e.infoType == 'a') {
                  e.infoTypeL[0] = {
                    label: '公告',
                    type: 'danger',
                  }
                } else if (e.infoType == 'b') {
                  e.infoTypeL[0] = {
                    label: '论坛',
                    type: 'success',
                  }
                } else if (e.infoType == 'c') {
                  e.infoTypeL[0] = {
                    label: '文章',
                    type: '',
                  }
                } else {
                  e.infoTypeL[0] = {
                    label: '未知状态',
                    type: 'info',
                  }
                }
                e.infoTopRelStatusL = []
                if (e.infoTopRelStatus == '0') {
                  e.infoTopRelStatusL[0] = {
                    label: '否',
                    type: '',
                  }
                } else if (e.infoTopRelStatus == '1') {
                  e.infoTopRelStatusL[0] = {
                    label: '是',
                    type: 'danger',
                  }
                } else {
                  e.infoTopRelStatusL[0] = {
                    label: '未知',
                    type: 'info',
                  }
                }
                e.infoImgsT = [...(e.infoImgs || [])]
              })
              _res = {
                code: 0,
                list: res.data.list,
                total: res.data.total,
                msg: res.msg,
              }
            } else {
              _res = {
                code: 1,
                msg: res.msg,
              }
            }
            return _res
          },
        },
      },
      // 核心模板
      modelConf: {
        mainButton: [
          {
            type: 'add',
            label: '新增',
            icon: 'el-icon-plus',
            code: 'add',
            isShow: true,
            requestModel: {
              requestFn: requestModel.sysmanageAdminAdd,
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
          {
            type: 'testComBut',
            label: '测试按钮',
            code: 'testBut',
            isShow: true,
            commitData: () => {
              return {
                mason: 'wuxibo',
              }
            },
          },
          {
            type: 'query',
            label: '查询',
            icon: 'el-icon-search',
            code: 'add',
            requestModel: {
              requestFn: requestModel.sysmanageAdminList,
              requestData: (req) => {
                let _req = {}
                Object.keys(req).forEach((name) => {
                  if (name !== 'releaseTime') {
                    _req[name] = req[name]
                  }
                })
                if (req.columns) {
                  _req.engFirstColumn = req.columns[0]
                  _req.engSecondColumn = req.columns[1]
                }
                if (req.releaseTime) {
                  _req.beginTime = formatDate(req.releaseTime[0], 'YYYY-mm-dd HH:MM:SS')
                  _req.endTime = formatDate(req.releaseTime[1], 'YYYY-mm-dd HH:MM:SS')
                }
                return _req
              },
              responseData: (res) => {
                let _res = {}
                if (res.code === 0) {
                  res.data.list.forEach((e, index) => {
                    e.contentTxt = e.content
                    // 设置状态
                    e.infoRelStatusL = []
                    if (e.infoRelStatus == '0') {
                      e.infoRelStatusL[0] = {
                        label: '未发布',
                        type: 'danger',
                      }
                    } else if (e.infoRelStatus == '1') {
                      e.infoRelStatusL[0] = {
                        label: '已发布',
                        type: 'success',
                      }
                    } else if (e.infoRelStatus == '2') {
                      e.infoRelStatusL[0] = {
                        label: '已下线',
                        type: 'info',
                      }
                    } else {
                      e.infoRelStatusL[0] = {
                        label: '未知状态',
                        type: '',
                      }
                    }
                    // 文章类型
                    e.infoTypeL = []
                    if (e.infoType == 'a') {
                      e.infoTypeL[0] = {
                        label: '公告',
                        type: 'danger',
                      }
                    } else if (e.infoType == 'b') {
                      e.infoTypeL[0] = {
                        label: '论坛',
                        type: 'success',
                      }
                    } else if (e.infoType == 'c') {
                      e.infoTypeL[0] = {
                        label: '文章',
                        type: '',
                      }
                    } else {
                      e.infoTypeL[0] = {
                        label: '未知状态',
                        type: 'info',
                      }
                    }
                    e.infoTopRelStatusL = []
                    if (e.infoTopRelStatus == '0') {
                      e.infoTopRelStatusL[0] = {
                        label: '否',
                        type: '',
                      }
                    } else if (e.infoTopRelStatus == '1') {
                      e.infoTopRelStatusL[0] = {
                        label: '是',
                        type: 'danger',
                      }
                    } else {
                      e.infoTopRelStatusL[0] = {
                        label: '未知',
                        type: 'info',
                      }
                    }
                    e.infoImgsT = [...(e.infoImgs || [])]
                  })
                  _res = {
                    code: 0,
                    list: res.data.list,
                    total: res.data.total,
                    msg: res.msg,
                  }
                } else {
                  _res = {
                    code: 1,
                    msg: res.msg,
                  }
                }
                return _res
              },
            },
          },
        ],
        tabelConf: [
          { label: '封面图片', prop: 'infoImgsT', type: 'image' },
          { label: '文章标题', prop: 'infoTitle', width: 200 },
          { label: '点赞数', prop: 'infoLikesNumber', width: 60 },
          { label: '评论数', prop: 'infoDiscussNumber', width: 60 },
          { label: '发布状态', prop: 'infoRelStatusL', type: 'tag', width: 90 },
          { label: '文章类型', prop: 'infoTypeL', type: 'tag', width: 90 },
          {
            label: '是否置顶',
            prop: 'infoTopRelStatusL',
            type: 'tag',
            width: 90,
          },
          { label: '创建时间', prop: 'createDate' },
          { label: '更新时间', prop: 'updateDate' },
          { label: '发布时间', prop: 'infoReleaseTime' },
          { label: '备注', prop: 'infoRemarks' },
          {
            label: '操作',
            type: 'operation',
            width: 420,
            fiexd: 'right',
            buttons: [
              {
                type: 'button',
                label: '发布',
                icon: 'el-icon-position',
                code: 'push',
                isShow: (item) => {
                  if (item.infoRelStatus == '1') {
                    return false // 已发布
                  } else {
                    return true
                  }
                },
                remindWinConf: {
                  title: '发布提示！',
                  msg: '发布后，消息将展现在网站，是否确认？',
                  code: 'push',
                },
                requestModel: {
                  requestFn: requestModel.sysmanageAdminEdit,
                  requestData: (req) => {
                    return {
                      infoId: req.infoId,
                      type: 'push',
                      infoRelStatus: '1',
                    }
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
              {
                type: 'button',
                label: '下线',
                icon: 'el-icon-moon',
                code: 'soldOut',
                isShow: (item) => {
                  if (item.infoRelStatus == '0') {
                    return false // 已下线
                  } else {
                    return true
                  }
                },
                remindWinConf: {
                  title: '下线提示！',
                  msg: '下线后，该条消息将不在网站展示，是否确认？',
                  code: 'soldOut',
                },
                requestModel: {
                  requestFn: requestModel.sysmanageAdminEdit,
                  requestData: (req) => {
                    return {
                      infoId: req.infoId,
                      type: 'push',
                      infoRelStatus: '0',
                    }
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
              {
                type: 'button',
                label: '置顶',
                icon: 'el-icon-star-off',
                code: 'soldOut',
                isShow: (item) => {
                  if (item.infoTopRelStatus == '0') {
                    return true // 置顶
                  } else {
                    return false
                  }
                },
                remindWinConf: {
                  title: '置顶提示！',
                  msg: '您确定要置顶这条数据？',
                  code: 'topArticle',
                },
                requestModel: {
                  requestFn: requestModel.sysmanageAdminEdit,
                  requestData: (req) => {
                    return {
                      infoId: req.infoId,
                      infoTopRelStatus: '1',
                      type: 'top',
                    }
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
              {
                type: 'button',
                label: '取消置顶',
                icon: 'el-icon-warning-outline',
                code: 'cancelTop',
                isShow: (item) => {
                  if (item.infoTopRelStatus == '1') {
                    return true // 非置顶
                  } else {
                    return false
                  }
                },
                remindWinConf: {
                  title: '取消置顶提示！',
                  msg: '您确定要取消置顶这条数据？',
                  code: 'soldOut',
                },
                requestModel: {
                  requestFn: requestModel.sysmanageAdminEdit,
                  requestData: (req) => {
                    return {
                      infoId: req.infoId,
                      infoTopRelStatus: '0',
                      type: 'top',
                    }
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
              {
                type: 'button',
                label: '编辑',
                icon: 'el-icon-edit',
                code: 'edit',
                isShow: (item) => {
                  return true
                },
                requestModel: {
                  requestFn: requestModel.sysmanageAdminEdit,
                  requestData: (req, model) => {
                    return req
                  },
                  responseData: (res) => {
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
                icon: 'el-icon-delete',
                code: 'delete',
                isShow: (item) => {
                  return true
                },
                remindWinConf: {
                  title: '删除警告！',
                  msg: '您确定要删除这条数据？',
                  code: 'delete',
                },
                requestModel: {
                  requestFn: requestModel.sysmanageAdminDelete,
                  requestData: (req) => {
                    return { infoId: req.infoId }
                  },
                  responseData: (res) => {
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
            ],
          },
        ],
        formConf: [
          { label: '文章标题', prop: 'infoTitle', maxlength: 60, span: 8 },
          {
            label: '文章类型',
            prop: 'infoType',
            type: 'select',
            option: genderOption,
            span: 8,
          },
          {
            label: '发布状态',
            prop: 'infoRelStatus',
            type: 'select',
            option: genderOption,
            span: 8,
          },
          {
            label: '发布时间',
            prop: 'infoReleaseTime',
            type: 'date',
            dateType: 'date',
            span: 12,
          },
          { label: '备注', prop: 'infoRemarks', isSeek: false, maxlength: 200, span: 12 },
          {
            label: '封面图片',
            prop: 'infoImgs',
            type: 'img',
            isSeek: false,
            requestModel: {
              requestFn: requestModel.uploadOnePhotoUrl(),
              uploadName: 'file',
              uploadHeaders: requestModel.uploadHeaders(), // 上传头部数据
              requestData: (req) => {
                return req
              },
              responseData: (response) => {
                console.log(response)
                let res = {}
                if (response.code === 0) {
                  res = {
                    code: 0,
                    msg: response.msg,
                    path: response.data.url,
                    data: response.data,
                  }
                } else {
                  res = { code: 1, msg: response.msg }
                }
                return res
              },
            },
          },
        ],
      },
    }
  },
  methods: {},
  created() {},
}
</script>

<style scoped>
.main-buts {
  margin-left: 10px;
}
</style>
