const removeBookmark = (e, bMId, bms) => {
  const bookmarks = bms.filter(bm => bm.id !== bMId)

  return (dispatch) => {
    dispatch({ type: "REMOVE_BOOKMARK", bookmarks: bookmarks})
  }
}

export default removeBookmark 