// index.ts
import {createStore, Store} from 'vuex'
import {InjectionKey} from 'vue'

export const key: InjectionKey<Store<state>> = Symbol('key')

export type state ={
    leftBar:boolean
}
export default createStore({
    state:{
        leftBar:true
    },
    mutations:{

    }
})
