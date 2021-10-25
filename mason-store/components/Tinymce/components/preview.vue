<template>
  <span>
    <el-button type="success" icon="el-icon-view" size="mini" @click="init">预览</el-button>
    <el-dialog
      :visible.sync="show"
      append-to-body
      title="预览"
      :close-on-click-modal="false"
      top="5vh"
    >
      <div class="select">
        屏幕宽度:
        <el-select v-model="swidth" :value="swidth">
          <el-option
            v-for="item in option"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </div>
      <div v-html="htmlBody" :class="swidth"></div>
    </el-dialog>
  </span>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      htmlBody: "",
      swidth: "i5",
      option: [
        { value: "i5", label: "iPhone 5" },
        { value: "i6", label: "iPhone 6/7/8" },
        { value: "i6P", label: "iPhone 6/7/8 Plus" },
        { value: "back", label: "后台管理系统" }
      ]
    };
  },
  methods: {
    init() {
      this.show = true;
      this.htmlBody = window.tinymce.activeEditor.getContent();
    }
  }
};
</script>

<style scoped>
.i5 {
  width: 320px;
  min-height: 700px;
  border: 1px solid #ccc;
  margin: 10px auto 0;
  border-radius: 20px;
}
.i6 {
  width: 375px;
  border-radius: 20px;
  min-height: 700px;
  border: 1px solid #ccc;
  margin: 10px auto 0;
}
.i6P {
  border-radius: 20px;
  width: 414px;
  min-height: 700px;
  margin: 10px auto 0;
  border: 1px solid #ccc;
}
.back {
  border-radius: 20px;
  width: 700px;
  min-height: 700px;
  margin: 10px auto 0;
  border: 1px solid #ccc;
}
.select {
  padding-left: 100px;
}
</style>