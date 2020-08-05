<template>
  <d2-container>
    <span style="color:red">这是父组件</span>
    <subPage2 data="这是父组件传入的值" :boolData="testBoolData" @eventSubPage2Click="onEventSubPage2Click"></subPage2>
    <!-- 将子组件注册到页面(注意,这里的标签名称subPage必须与components里边的属性名称一致)-->
    <subPage ref="subPage1"></subPage>
    <el-button @click="onClick">调用子组件方法</el-button>
    <el-button type="primary" @click="onRequest">请求服务器</el-button>
    <el-button type="primary" @click="onGetSysMenu">取得菜单</el-button>
    <br />
    <el-button type="primary" @click="onMenuList">取得菜单</el-button>

    <br />
    <el-button type="primary" @click="onPromise">Promise 演示</el-button>
    <br />
    <el-button type="primary" @click="onWebApi">访问后台演示</el-button>
    <br />
    <el-button type="primary" @click="onTest1">展开运算符演示</el-button>
  </d2-container>
</template>

<script>
import { HelloWorld, GetSysMenu, GetMenuList } from '@api/hello'
//将mapActions引入页面
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      testBoolData: false,
      flag: false
    }
  },
  mounted() {
    console.log("page1 初始化完成")
  },
  methods: {
    //将对应模块的actions映射进本页面,注意,前面要加...
    ...mapActions('pms/sys.menu', ['getMenuList']),
    onClick() {
      //通过this.$refs.subPage1访问到子页面对象,调用方法
      this.$refs.subPage1.subPageMethod()
    },
    onEventSubPage2Click(arg) {
      console.log("page1组件已经接受到事件")
      console.log(arg)
    },
    onRequest() {
      HelloWorld().then(
        //当请求成功时调用该方法
        res => {
          console.log(res)
        }
      )
    },
    onGetSysMenu() {
      GetSysMenu().then(res => {
        //当执行成功时,执行then方法
        console.log(res)
      }).catch(err => {
        //当服务器出现错误时,执行catch方法
      })
    },
    onMenuList() {
      let id = '11111'
      GetMenuList(id).then(response => {
        console.log(response)
      })
    },
    onPromise() {
      this.flag = !this.flag//对flag取反
      new Promise((resolve, reject) => {
        //请求后台数据,当请求成功的时候,调用rselove()方法,请求失败的时候调用reject()方法

        if (this.flag) {
          resolve('成功消息')//表示成功,当调用了resolve()方法时,后面的then代码执行,
        } else {
          reject('失败消息');//表示失败,当调用了reject()方法时,后面的catch代码被执行
        }
      }).then(res => {
        //当Promise代码块中的resolve()被执行之后,本段代码被调用
        console.log(res)
      }).catch(err => {
        //当Promise代码块中的reject()被执行之后,本段代码被调用
        console.log(err)
      })
    },
    onWebApi() {
      console.log(this.$store)
      //因为在methods中第一行(不一定是第一行,最后一行,中间都行,这是习惯问题)
      //mapActions使用了...展开运算符,将对应模块的actions映射到了this对象中,那么在本页面就可以调用
      this.getMenuList().then(
        res => {
          console.log(res)
        }
      )
    },
    onTest1() {
      //演示展开运算符
      let person = { name: '张三', age: 20 }
      const student = { ...person, english: 50 }
      console.log(student)
    }
  },
  components: {
    subPage2: () => import('./sub-page2'),
    subPage: () => import('./sub-page'),

  }
}
</script>
