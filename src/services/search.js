export function getLists (value) {
  return fetch('/api/getListsAsync?value=' + value)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err)
    })
}