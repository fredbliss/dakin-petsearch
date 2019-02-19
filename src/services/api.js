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
  },
  filterPetsByLocation (data) {
    return Vue.axios.post('https://dakin.brightcloudstudioserver.com/files/petango/src/public/generate/filter', data).then((response) => {
      return response.data
    })
  }
}
