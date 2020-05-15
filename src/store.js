import Vue from "vue";
import Vuex from "vuex";
import Api from "./allAxios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keys:"",
    isLoad:false,
    loadingCount:0,
    searchList:[],
    count:0,
    list:[],
    flag:false,
  },
  mutations: {
    edit(state,payload){
      console.log(payload)
      state.keys=payload;
    },
    editList(state,list){
      state.list=list;
    },
    editFlag(state,flag){
      state.flag=flag
    }
  },
  actions: {
     addList({commit,state}){    
      let storage = {};
      storage.get = key => {
        return localStorage.getItem(key);
      };
      storage.set = (key, val) => {
        return localStorage.setItem(key, val);
      };
       console.log(state.keys)
      let data_searchList = JSON.parse(storage.get(`"${state.keys}"`));
       if (!data_searchList) {
        //搜索关键词接口
        Api(`/search/suggest?keywords="${state.keys}"&type=mobile`)
          .then(res => {
             //当有搜索结果时，提交mutations
            if(res.result.songs){
              //提交mutations
            commit("editList",res.result.songs)
            commit("editFlag",false);
            storage.set(`${state.keys}`, JSON.stringify(res.result.songs));    
            }else{
              //没有结果，就修改flag状态
              commit("editFlag",true);
            }       
          })
          .catch(err => {
            //出现错误时，修改flag的值
            commit("editFlag",true);
            console.log("没有结果")
            console.log(state.flag)
            console.log(err);
          });
      } else {
         this.list = data_searchList;
       } 
  
     },

  }
});
