import Vue from 'vue'

export default {
  getPets () {
    let url = process.env.API
    return Vue.axios.get(url + '/all.json').then((response) => {
      return response.data
    })
  },
  getPet (id) {
    let url = process.env.API
    return Vue.axios.get(url + '/' + id + '.json').then((response) => {
      return response.data
    })
  }
}
