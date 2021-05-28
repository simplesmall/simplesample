const mutations = {
  isLoginMut (state, bool) {
    state.isLogin = bool
  },
  replaceRecordDialogMut (state, bool) {
    state.replaceRecordDialog = bool
  },
  brandBalanceDialogMut (state, bool) {
    state.brandBalanceDialog = bool
  },
  totalBalanceDialogMut (state, bool) {
    state.totalBalanceDialog = bool
  },
  stemsBalanceDialogMut (state, bool) {
    state.stemsBalanceDialog = bool
  },
  sendBalanceDialogMut (state, bool) {
    state.sendBalanceDialog = bool
  }
}
export default mutations
