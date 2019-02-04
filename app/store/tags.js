export const state = () => ({
  tags: [{
    body: "これは赤色の付箋です",
    bgColor: "#f2b9c6"
  }, {
    body: "これは青色の付箋です",
    bgColor: "#c6deed"
  }]
})

export const getters = {
  tags: state => state.tags,
}

export const mutations = {
}

export const actions = {
}
