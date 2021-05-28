<template>
  <div>
    <el-dialog
      title="打印替换记录"
      :visible.sync="replaceRecordDialog"
      width="30%"
      :before-close="handleClose">
      <span>打印替换记录</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="replaceRecordDialog = false">取 消</el-button>
        <el-button type="primary" @click="replaceRecordDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'replaceRecord',
  props: ['replaceRecordObj'],
  data () {
    return {
      replaceRecordDialog: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    }
  },
  watch: {
    '$store.state.replaceRecordDialog': function (val) {
      this.replaceRecordDialog = val
    },
    replaceRecordDialog: function (val) {
      this.$store.dispatch('replaceRecordDialogAct', val)
    }
  }
}
</script>

<style scoped>

</style>
