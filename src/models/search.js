import { getLists } from '@/services/search'
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: []
  },
  // 同步
  reducers: {
    getLists (state, action) {
      console.log(action)
      return {
        ...state,
        lists: action.payload
      }
    }
  },
  // 异步
  effects: {
    *getListAsync ({ payload }, { call, put }) { //payload指的参数  call和put都是函数，call主要用来异步调用，put主要用来事件派发
      const res = yield call(getLists, payload)
      console.log(res)
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}