const changeBookmarks= (restaurant, bookmarks) => {
  const bookmark = bookmarks.filter(bm => bm.id == restaurant.id).favorite = false
  console.log(bookmark)
  return (dispatch) => {
    dispatch({ type: "REMOVE_BOOKMARK", bookmarks: bookmarks})
  }
}

export default changeBookmarks