<template>
  <div>
    <el-dialog
      title="打印牌号平衡"
      :visible.sync="brandBalanceDialog"
      width="30%"
      :before-close="handleClose">
      <span>打印牌号平衡</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="brandBalanceDialog = false">取 消</el-button>
        <el-button type="primary" @click="brandBalanceDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'brandBalance',
  props: ['brandBalanceObj'],
  data () {
    return {
      brandBalanceDialog: false
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
    '$store.state.brandBalanceDialog': function (val) {
      this.brandBalanceDialog = val
    },
    brandBalanceDialog: function (val) {
      this.$store.dispatch('brandBalanceDialogAct', val)
    }
  }
}
</script>

<style scoped>

</style>
