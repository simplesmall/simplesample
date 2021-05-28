<template>
  <div>
    <el-dialog
      title="打印全部平衡"
      :visible.sync="totalBalanceDialog"
      width="30%"
      :before-close="handleClose">
      <span>打印全部平衡</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="totalBalanceDialog = false">取 消</el-button>
        <el-button type="primary" @click="totalBalanceDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'totalBalance',
  props: ['totalBalanceObj'],
  data () {
    return {
      totalBalanceDialog: false
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
    '$store.state.totalBalanceDialog': function (val) {
      this.totalBalanceDialog = val
    },
    totalBalanceDialog: function (val) {
      this.$store.dispatch('totalBalanceDialogAct', val)
    }
  }
}
</script>

<style scoped>

</style>
