<template>
  <span>
    <el-button type="success" size="mini" icon="el-icon-upload" @click="init" :disabled="disabled">视频上传</el-button>
    <el-dialog :visible.sync="show" title="上传视频" append-to-body width="400px" :close-on-click-modal="false">
      <el-upload
        :action="baseUrl"
        :headers="headers"
        :show-file-list="false"
        :http-request="beforeUpload"
        :multiple="false"
        :disabled="disabled"
        accept=".mp4, .avi, .wmv"
      >
        <el-button type="primary" size="mini">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          <el-progress :text-inside="true" :stroke-width="24" :percentage="percentage" status="success"></el-progress>
          <div>只能上传mp4文件</div>
        </div>
      </el-upload>
    </el-dialog>
  </span>
</template>

<script>
const blockSize = 2097152
function getChunkInfo(file, currentChunk, size) {
  const start = currentChunk * size
  const end = Math.min(file.size, start + size)
  const chunk = file.slice(start, end)
  return { start, end, chunk }
}

export default {
  props: { requestModel: { type: Object, default: {} } },
  data() {
    return {
      percentage: 0,
      disabled: false,
      show: false,
      headers: this.requestModel.uploadHeaders,
      baseUrl: this.requestModel.requestFn,
    }
  },
  methods: {
    init() {
      this.show = true
    },
    beforeUpload(val) {
      const isMp4 = val.file.type == 'video/mp4'
      const isLt1g = val.file.size < 107374824
      if (!isMp4) {
        this.$message.error('上传文件格式为mp4')
        return
      }
      if (!isLt1g) {
        this.$message.error('上传文件不能超过1G')
      }
      this.disabled = true
      var count = Math.ceil(val.file.size / blockSize)
      this.percentage = 0
      this.uploadChunk({
        file: val.file,
        offset: 0,
        count,
        currentChunk: 0,
        size: blockSize,
        name: null,
      })
    },
    uploadChunk({ file, offset, count, currentChunk, size, name }) {
      let params = {
        offset, //总计上传量
        complete: count - 1 == currentChunk ? true : false,
      }
      var { chunk, start, end } = getChunkInfo(file, currentChunk, size)
      let data = new FormData()
      var fileData = new File([file.slice(start, end)], file.name, {
        type: file.type,
      }) //单片文件
      data.append('file', fileData)
      if (name) {
        data.append('groupName', name[0])
        data.append('appenderFileName', name[1])
      }
      this.$message.info('尚未完善，敬请期待！')
      return
      this.requestModel
        .requestFn(data, params)
        .then((res) => {
          this.percentage = end == file.size ? 100 : Number(((end / file.size) * 100).toFixed(2))
          if (currentChunk == count - 1) {
            this.disabled = false
            this.$emit('success', res.data)
            this.$message.success('上传成功')
            this.show = false
          } else {
            currentChunk++
            this.uploadChunk({
              file,
              offset: end,
              count,
              currentChunk,
              size,
              name: res.data,
            })
          }
        })
        .catch((err) => {
          this.disabled = false
        })
    },
  },
}
</script>

<style></style>
