<template>
  <div class="search">
    <!-- <button @click="testBtn">{{this.$store.state.count}}---{{this.$store.state.keys}}</button> -->
    <div class="search_top">
      <div class="search_box">
        <span>&#xe617;</span>
        <input v-model="message" type="text" placeholder="搜索歌曲、歌手、专辑" autofocus="true" autocomplete="off" id="txt" @keydown="toSearch" />
        <p @click="toSearchHot" v-show="current">
          <em>&#xe60a;</em>
        </p>
      </div>
    </div>
    <div class="search_content">
      <!-- <keep-alive> 如果不去掉，第二次搜索的信息，还是会显示上一次的搜索结果，去掉后每次搜索的时候，组件都会换，且只有一个-->
        <component :is="comlList[current]" :parents="message" @changeCom="updateCom" :history="arr"  ></component>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import SearchHot from "../components/SearchHot";
import SearchList from "../components/SearchList";
import SearchMatch from "../components/SearchMatch";


export default {
  name: "Search",
  data() {
    return {
      current:0,
      message:"",
      comlList:['SearchHot','SearchList','SearchMatch'],
      msg:"",
      arr:[],
      attr:[],
      
    };
  },
  watch:{
    message:function(newval){
     /*  console.log("当前值",newval)
      console.log("旧值",oldval) */
      //提交mutations
       this.$store.commit("edit",newval);
      //提交actions
       this.$store.dispatch("addList");
    }
  },
  components: {
    SearchHot,
    SearchList,
    SearchMatch
  },
  methods:{
    toSearchHot(){
      this.current=0;
      this.message="";
    },
    toSearch(e){
     if(e.keyCode==13){
       this.current=2;
      //  console.log(this.arr);
       for(var i in this.arr){
         //去重
         if(this.message==this.arr[i]){
           return; 
         }
       }
       this.arr.unshift(this.message);
     }else{
       this.current=1;
     }
    },
    updateCom(tex){
        this.current=tex;
    },
   /*   testBtn(){
      this.$store.dispatch("test",this.parents)
      console.log(this.parents)
    } */
  }
  
 
};
</script>

<style lang="scss" scoped>
@mixin flexs {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin flex_space {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search {
  width: 100%;
  height: 100%;
  .search_top {
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    @include flexs;
    .search_box {
      width: 85%;
      height: 60px;
      background-color: #ebecec;
      border-radius: 50px;
      display: flex;
      align-items: center;
      padding: 10px 30px;
      position:relative;
      span {
        font-family: "iconfont";
        margin-right: 20px;
      }
      input {
        outline: none;
        border: none;
        background-color: #ebecec;
        font-size: 28px;
        &::placeholder {
          color: #999;
          opacity: 0.5;
        }
      }
      p{
        position:absolute;
        top:20px;
        right:20px;
        width:40px;
        height:40px;
        border-radius:50%;
        background-color:#999;
        @include flexs;
        em{
          font-family:"iconfont";
          color:#eee;
          display:inline-block;
          font-size:5px;      
        }
      }
    }
  }
}
</style>