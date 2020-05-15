<template>
  <div class="SearchList">
    <div class="searchTitle" v-text='`搜索："${parents}"`' @click="send(`${parents}`)" ></div>
    <!-- 通过v-if,v-else来实现内容切换 -->
    <div v-if="this.$store.state.flag" class="result">抱歉，暂无搜索结果</div>
    <ul v-else>
       <li v-for="(item,index) in this.$store.state.list" :key="index"  @click="send2(`${item.name}`)">
        <i>&#xe617;</i>
        <span v-text="`${item.name}`"></span>
      </li> 
    </ul>
 
  </div>
</template>

<script>
import Api from "../allAxios";

export default {
  name: "SearchList",
  data() {
    return {   
    };
  },
  props: {
    parents: {
      type: String
    },
  },
  methods:{
     send(txt1){
      //单个值提交
      this.$store.commit("edit",txt1)
      //子传父
      this.$emit('changeCom',"2")

    },
    send2(txt2){
       //单个值提交
     this.$store.commit("edit",txt2)
       //子传父
      this.$emit('changeCom',"2")
    },
   
  }
};
</script>

<style lang="scss" scoped>
.SearchList {
  width: 100%;
  height: 100%;
  .searchTitle {
    font-size: 30px;
    color: #507daf;
    padding: 30px;
    border-bottom: 1px solid #eee;
  }
  .result{
    font-size:12px;
    text-align:center;
    padding-top:30px;
  }
  ul {
    width: 100%;
    li {
      &:nth-child(n+7){
        display:none;
      }
      width: 100%;
      padding: 0px 30px;
      color: #333;
      font-size: 30px;
      i {
        display: inline-block;
        width: 7%;
        font-family: "iconfont";
      }
      span {
        display: inline-block;
        width: 90%;
        padding: 30px 0px;
        border-bottom: 1px solid #eee;
      }
    }
  }
}
</style>