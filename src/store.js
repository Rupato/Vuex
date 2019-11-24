import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My custom title',
    //safe an array
    links: [
      'https://www.google.co.in',
      'https://www.facebook.com',
      'https://www.youtube.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    //payload to send data to add new link 
      ADD_LINK: (state, link) => {
        state.links.push(link)
      },
      REMOVE_LINK:(state, link) => {
        state.links.splice(link)
      },
      REMOVE_ALL:(state) => {
        state.links = []
      } 
  },
  actions: {
      removeLink : (context, link) => {
        context.commit("REMOVE_LINK", link)
      },
      removeAll ({commit}) {                    
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('REMOVE_ALL')
            resolve()
          }, 1500)
        })
      }
    }
})
