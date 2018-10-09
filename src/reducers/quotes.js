export default (state = [], action) => {
  // debugger;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return [...state.filter(quote => quote.id != action.quoteToRemove)];

    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteToVote.id) {
          return {
            id: action.quoteToVote.id,
            content: action.quoteToVote.content,
            author: action.quoteToVote.author,
            votes: action.quoteToVote.votes + 1
          };
        } else {
          return quote;
        }
      });

    case "DELETE_VOTE":
      return state.map(quote => {
        if (quote.id === action.quoteToDownvote.id) {
          return {
            id: action.quoteToDownvote.id,
            content: action.quoteToDownvote.content,
            author: action.quoteToDownvote.author,
            votes: action.quoteToDownvote.votes - 1
          };
        } else {
          return quote;
        }
      });
      break;
    default:
      return state;
  }
};

//
// const updatedItems = state.map(item => {
//     if(item.id === action.id){
//       return { ...item, ...action.payload }
//     }
//     return item
//   })
//   return updatedItems
