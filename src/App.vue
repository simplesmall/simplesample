<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
/*!*控制整个滚动条*!
::-webkit-scrollbar {
  background-color: lightgray;
  width: 10px;
  height: 10px;
  !*background-clip: padding-box;*!
}

!*滚动条两端方向按钮*!
::-webkit-scrollbar-button {
  background-color: pink;
}

!*滚动条中间滑动部分*!
::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 5px;
}

!*滚动条右下角区域*!
::-webkit-scrollbar-corner {
  background-color: red;
}*/
</style>
