<template>
  <div>
    <el-dialog
      title="打印梗丝平衡"
      :visible.sync="stemsBalanceDialog"
      width="30%"
      :before-close="handleClose">
      <span>打印梗丝平衡</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="stemsBalanceDialog = false">取 消</el-button>
        <el-button type="primary" @click="stemsBalanceDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'stemsBalance',
  props: ['stemsBalanceObj'],
  data () {
    return {
      stemsBalanceDialog: false
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
    '$store.state.stemsBalanceDialog': function (val) {
      this.stemsBalanceDialog = val
    },
    stemsBalanceDialog: function (val) {
      this.$store.dispatch('stemsBalanceDialogAct', val)
    }
  }
}
</script>

<style scoped>

</style>
