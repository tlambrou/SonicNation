export const UPDATE = "UPDATE"

export const updateSearch = (text = '') => {
  return {
    type: UPDATE,
    payload: {
      text: text
    }
  }
}
