<template>
  <div>
    <el-dialog
      title="发送平衡"
      :visible.sync="sendBalanceDialog"
      width="80%"
      :fullscreen="true"
      :before-close="handleClose">
      <span>发送平衡</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sendBalanceDialog = false">取 消</el-button>
        <el-button type="primary" @click="sendBalanceDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'sendBalance',
  props: ['sendBalanceObj'],
  data () {
    return {
      sendBalanceDialog: false
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
    '$store.state.sendBalanceDialog': function (val) {
      this.sendBalanceDialog = val
    },
    sendBalanceDialog: function (val) {
      this.$store.dispatch('sendBalanceDialogAct', val)
    }
  }
}
</script>

<style scoped>

</style>
