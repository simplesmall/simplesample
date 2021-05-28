<template>
  <div class="hello" id="wrapper">
    <replaceRecord></replaceRecord>
    <brandBalance></brandBalance>
    <totalBalance></totalBalance>
    <stemsBalance></stemsBalance>
    <sendBalance></sendBalance>
    <div class="header">
      <span style="padding-left: 20px;">配方平衡</span>
    </div>
    <!--  条件选择区域  -->
    <div class="chooseArea">
      <!--  功能按钮显示行  -->
      <div class="buttonRow">
        <el-row>
          <el-button size="small" type="primary" @click="openReplaceRcord">打印替换记录</el-button>
          <el-button size="small" type="primary" @click="openBrandBalance">打印牌号平衡</el-button>
          <el-button size="small" type="primary" @click="openTotalBalance">打印全部平衡</el-button>
          <el-button size="small" type="primary" @click="openStemsBalance">打印梗丝平衡</el-button>
          <el-button size="small" type="primary" @click="openSendBalance">发送平衡</el-button>
          <el-button size="small" type="primary">关闭</el-button>
          <el-button size="small" @click="getData">output params</el-button>
        </el-row>
      </div>
      <!--   上行   -->
      <div class="upper">
        <!--    平衡名称    -->
        <div class="inputContainer">
          <span>平衡名称:</span>
          <el-input
            size="mini"
            placeholder="请输入平衡名称"
            v-model="balanceName">
          </el-input>
        </div>
        <!--    平衡时间    -->
        <div class="inputContainerShort">
          <span>平衡时间:</span>
          <el-date-picker
            size="mini"
            v-model="balanceTime"
            type="date"
            :change="getData()"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <!--    生产分厂    -->
        <div class="inputContainerShort" style="width: 350px;">
          <span>生产分厂:</span>
          <el-input
            size="mini"
            placeholder="请输入生产分厂"
            v-model="productBranch">
          </el-input>
        </div>
        <!--   库存时间  -->
        <div class="inputContainerShort">
          <span>库存时间:</span>
          <el-date-picker
            size="mini"
            v-model="stockTime"
            type="date"
            :change="getData()"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <!--   下行   -->
      <div class="downer">
        <!--    平衡名称    -->
        <div class="inputContainer">
          <span>平衡名称:</span>
          <el-input
            size="mini"
            placeholder="请输入平衡名称"
            v-model="balanceName2">
          </el-input>
        </div>
        <!--    平衡类型    -->
        <div class="inputContainerShort">
          <span>平衡类型:</span>
          <el-select v-model="balanceType" size="mini" clearable placeholder="请选择平衡类型">
            <el-option
              v-for="item in balanceTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <!--    拟制    -->
        <div class="inputContainerShort">
          <span>拟制:</span>
          <el-input
            size="mini"
            placeholder="请输入拟制信息"
            v-model="fictitious">
          </el-input>
        </div>
        <!--    审核    -->
        <div class="inputContainerShort">
          <span>审核:</span>
          <el-input
            size="mini"
            placeholder="请输入审核人"
            v-model="review">
          </el-input>
        </div>
        <!--    批准    -->
        <div class="inputContainerShort">
          <span>批准:</span>
          <el-input
            size="mini"
            placeholder="请输入批准人"
            v-model="approve">
          </el-input>
        </div>
      </div>
    </div>
    <!--  原料平衡  -->
    <div class="materialBalance">
      <!--   原料平衡数据   -->
      <div class="left">
        <div class="header">
          <span style="padding-left: 20px;">原料平衡数据</span>
        </div>
        <el-table
          stripe
          ref="multipleTable"
          :data="tableData"
          height="366"
          size="mini"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            fixed
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
      <!--   此原料用于以下牌号的生成   -->
      <div class="right">
        <div class="header">
          <span style="padding-left: 20px;">此原料用于以下牌号的生成</span>
        </div>
        <div>
          <el-table
            stripe
            ref="multipleTable"
            :data="tableData"
            height="366"
            size="mini"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              fixed
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!--  替换原料  -->
    <div class="replaceMaterial">
      <div class="header">
        <span style="padding-left: 20px;">替换原料</span>
      </div>
      <el-row style="padding: 3px">
        <el-button size="mini" icon="el-icon-search">删除</el-button>
        <el-button size="mini" icon="el-icon-search">查看使用情况</el-button>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        height="136"
        size="mini"
        tooltip-effect="dark"
        style="width: 100%"
        @row-dblclick="testRowClick"
        @selection-change="handleSelectionChange">
        <el-table-column
          fixed
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <!--  调拨原料  -->
    <div class="transferMaterial">
      <div class="header">
        <span style="padding-left: 20px;">调拨原料</span>
      </div>
      <el-row style="padding: 3px">
        <el-button size="mini" icon="el-icon-search">删除</el-button>
        <el-button size="mini" icon="el-icon-search">查看使用情况</el-button>
      </el-row>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          height="146"
          size="mini"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            fixed
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import replaceRecord from './birtDialog/replaceRecord'
import brandBalance from './birtDialog/brandBalance'
import totalBalance from './birtDialog/totalBalance'
import stemsBalance from './birtDialog/stemsBalance'
import sendBalance from './birtDialog/sendBalance'

export default {
  name: 'HelloWorld',
  components: {
    replaceRecord,
    brandBalance,
    totalBalance,
    stemsBalance,
    sendBalance
  },
  data () {
    return {
      // 记录buttonRow 打开弹窗状态值
      replaceRecordDialog: false, // 替换记录
      brandBalanceDialog: false, // 牌号平衡
      totalBalanceDialog: false, // 全部平衡
      stemsBalanceDialog: false, // 梗丝平衡
      sendBalanceDialog: false, // 发送平衡
      closeDialog: false, // 关闭

      // chooseArea 字段变量
      multipleSelection: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }],

      balanceName: '', // 平衡名称
      balanceTime: '', // 平衡时间
      productBranch: '', // 生产分厂
      stockTime: '', // 库存时间
      balanceName2: '', // 平衡名称2
      balanceType: '', // 平衡类型
      fictitious: '', // 拟制
      review: '', // 审核
      approve: '', // 批准
      balanceTypeOptions: [{
        value: '101',
        label: '初步平衡'
      },
      {
        value: '202',
        label: '动平衡'
      }]
    }
  },
  created () {
    this.showParams()
  },
  methods: {
    // buttonRow中的按钮操作
    openReplaceRcord () {
      this.$store.dispatch('replaceRecordDialogAct', true)
    },
    openBrandBalance () {
      this.$store.dispatch('brandBalanceDialogAct', true)
    },
    openTotalBalance () {
      this.$store.dispatch('totalBalanceDialogAct', true)
    },
    openStemsBalance () {
      this.$store.dispatch('stemsBalanceDialogAct', true)
    },
    openSendBalance () {
      this.$store.dispatch('sendBalanceDialogAct', true)
    },
    // 测试行内操作
    testRowClick (row) {
      console.log(row.name + row.address + row.data)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    showParams () {
      console.log('balanceName: ' + this.balanceName + 'balanceTime: ' + this.balanceTime +
        'productBranch: ' + this.productBranch + 'stockTime: ' + this.stockTime +
        'balanceName2: ' + this.balanceName2 + 'balanceType: ' + this.balanceType +
        'fictitious: ' + this.fictitious + 'review: ' + this.review +
        'approve: ' + this.approve)
    },
    getData () {
      console.log('balanceName: ' + this.balanceName + '\tbalanceTime: ' + this.balanceTime +
        'productBranch: ' + this.productBranch + 'stockTime: ' + this.stockTime +
        'balanceName2: ' + this.balanceName2 + 'balanceType: ' + this.balanceType +
        'fictitious: ' + this.fictitious + 'review: ' + this.review +
        'approve: ' + this.approve)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  width: 50%;
  height: 100%;
  background: #000;
  margin-right: 1px;
}

.right {
  width: 50%;
  height: 100%;
  background: yellow;
}

.transferMaterial {
  width: 100%;
  /*display: flex;*/
  /*flex: 1;*/
  /*background: aqua;*/
}

.replaceMaterial {
  width: 100%;
  height: auto;
  /*overflow: scroll;*/
  /*background: rebeccapurple;*/
}

.materialBalance {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  background: blue;
}

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
  margin: 10px;
  /*background: #ebebeb;*/
}

.upper {
  display: flex;
  flex-direction: row;
}

.downer {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.chooseArea {
  height: 134px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  background: white;
}

.header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: dodgerblue;
  color: white;
}

#wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ebebeb52;
  text-align: left;
}
</style>
