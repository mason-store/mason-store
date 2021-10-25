<template>
  <div class="upload-container">
    <!-- <UploadBtn :requestModel="requestModel" @success="uploadSuccess" /> -->
    <Preview />
    <el-button
      :style="{ background: color, borderColor: color }"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click="dialogVisible = true"
    >
      图片上传
    </el-button>
    <el-dialog :visible.sync="dialogVisible" append-to-body title="上传图片" :close-on-click-modal="false">
      <el-upload
        :limit="config.limit"
        accept=".jpg, .png"
        :headers="headers"
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        class="editor-slide-upload"
        :action="baseUrl"
        :on-exceed="handleExceed"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">上传</el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确定</el-button>
    </el-dialog>
  </div>
</template>

<script>
// import { getToken } from 'api/qiniu'
import UploadBtn from './uploadBtn'
import Preview from './preview'
export default {
  components: { UploadBtn, Preview },
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff',
    },
    tinymceId: {
      type: String,
    },
    requestModel: { type: Object, default: {} },
    config: { type: Object, default: {} },
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: [],
      headers: this.requestModel.uploadHeaders,
      baseUrl: this.requestModel.requestFn,
    }
  },
  methods: {
    uploadSuccess(val) {
      const url = `${process.env.VUE_APP_BASEURL}/${val.join('/')}`
      this.$emit('confirmVideo', url)
    },
    checkAllSuccess() {
      return Object.keys(this.listObj).every((item) => this.listObj[item].hasSuccess)
    },
    handleSubmit() {
      const arr = Object.keys(this.listObj).map((v) => this.listObj[v])
      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图像成功上载。如果有网络问题，请刷新页面并重新上传！')
        return
      }
      this.$emit('successCBK', arr)
      this.listObj = {}
      this.fileList = []
      this.dialogVisible = false
    },
    handleSuccess(response, file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          const res = this.requestModel.responseData(response)
          if (res.code == 0) {
            this.listObj[objKeyArr[i]].url = res.path
            this.listObj[objKeyArr[i]].hasSuccess = true
          } else {
            this.$message.error(res.msg)
          }
          return
        }
      }
    },
    handleExceed(files, fileList) {
      this.$message('图片数量超过限制，如需更换，请删除再上传！')
      return
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      const _self = this
      const _URL = window.URL || window.webkitURL
      const fileName = file.uid
      this.listObj[fileName] = {}
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = _URL.createObjectURL(file)
        img.onload = function() {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height,
          }
        }
        resolve(true)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
