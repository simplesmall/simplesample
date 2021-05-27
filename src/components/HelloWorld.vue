<template>
  <div class="hello" id="wrapper">
    <div class="header">配方平衡</div>
    <div class="chooseArea">
      <div class="upper">
        <div class="inputContainer">
          <span>平衡名称:</span>
          <el-input
            size="mini"
            placeholder="请输入内容"
            v-model="input1">
          </el-input>
        </div>
        <div class="inputContainerShort">
          <span>平衡时间:</span>
          <el-input
            size="mini"
            placeholder="请输入内容"
            v-model="input1">
          </el-input>
        </div>
        <div class="inputContainerShort" style="width: 350px;">
          <span>生产分厂:</span>
          <el-input
            size="mini"
            placeholder="请输入生产分厂"
            v-model="input1">
          </el-input>
        </div>
        <div class="inputContainerShort">
          <span>库存时间:</span>
          <el-input
            size="mini"
            placeholder="请输入内容"
            v-model="input1">
          </el-input>
        </div>
      </div>
      <div class="downer">
        <div class="inputContainer">
          <span>平衡名称:</span>
          <el-input
            size="mini"
            placeholder="请输入平衡名称"
            v-model="input1">
          </el-input>
        </div>
        <div class="inputContainerShort">
          <span>平衡类型:</span>
          <el-select v-model="value" size="mini"  clearable placeholder="请选择平衡类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="inputContainerShort">
          <span>拟制:</span>
          <el-input
            size="mini"
            placeholder="请输入拟制信息"
            v-model="input1">
          </el-input>
        </div>
        <div class="inputContainerShort">
          <span>审核:</span>
          <el-input
            size="mini"
            placeholder="请输入审核人"
            v-model="input1">
          </el-input>
        </div>
        <div class="inputContainerShort">
          <span>批准:</span>
          <el-input
            size="mini"
            placeholder="请输入批准人"
            v-model="input1">
          </el-input>
        </div>
      </div>
    </div>
    <div class="buttonRow">
      <el-row>
        <el-button size="small" type="primary">打印替换记录</el-button>
        <el-button size="small" type="primary">打印牌号平衡</el-button>
        <el-button size="small" type="primary">打印全部平衡</el-button>
        <el-button size="small" type="primary">打印梗丝平衡</el-button>
        <el-button size="small" type="primary">发送平衡</el-button>
        <el-button size="small" type="primary">关闭</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputContainer span {
  width: 90px;
}

.inputContainer {
  width: 470px;
  display: flex;
  flex-direction: row;
  margin-left: 5px;
}

.inputContainerShort span {
  width: 100px;
}

.inputContainerShort {
  width: 220px;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
}

.buttonRow {
  margin-left: 20px;
  /*background: #ebebeb;*/
}

.upper{
  display: flex;
  flex-direction: row;
}
.downer{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.chooseArea {
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: mediumpurple;
}

.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: dodgerblue;
  padding-left: 20px;
  color: white;
}

#wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: deeppink;
  text-align: left;
}
</style>
