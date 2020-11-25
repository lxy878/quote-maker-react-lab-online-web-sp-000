export default (state = [], action) => {
  switch(action.type){
    case('ADD_QUOTE'):
      return [...state, action.quote]

    case('REMOVE_QUOTE'):
      console.log(action.quoteId)
      // const id = action.quoteId
      return []

    case('UPVOTE_QUOTE'):
      console.log(action.quoteId)
      return []

    case('DOWNVOTE_QUOTE'):
      console.log(action.quoteId)
      return []

    default:
      return state
  }
}
