// TODO: Create action creators as defined in tests

function addQuote(quote) {
  return { type: "ADD_QUOTE", quote: quote };
}

function removeQuote(quoteId) {
  return { type: "REMOVE_QUOTE", quoteToRemove: quoteId };
}

function downvoteQuote(quote) {
  return { type: "DELETE_VOTE", quoteToDownvote: quote };
}

function upvoteQuote(quote) {
  return { type: "UPVOTE_QUOTE", quoteToVote: quote };
}

export { addQuote, removeQuote, downvoteQuote, upvoteQuote };
