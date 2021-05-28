const actions = {
  isLoginAct (context, bool) {
    context.commit('isLoginMut', bool)
  },
  replaceRecordDialogAct (context, bool) {
    context.commit('replaceRecordDialogMut', bool)
  },
  brandBalanceDialogAct (context, bool) {
    context.commit('brandBalanceDialogMut', bool)
  },
  totalBalanceDialogAct (context, bool) {
    context.commit('totalBalanceDialogMut', bool)
  },
  stemsBalanceDialogAct (context, bool) {
    context.commit('stemsBalanceDialogMut', bool)
  },
  sendBalanceDialogAct (context, bool) {
    context.commit('sendBalanceDialogMut', bool)
  }
}
export default actions
