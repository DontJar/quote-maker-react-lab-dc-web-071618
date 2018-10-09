import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import QuoteCard from "../components/QuoteCard";
import { downvoteQuote, removeQuote, upvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    // debugger;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes &&
                this.props.quotes.map(quote => (
                  <QuoteCard
                    quote={quote}
                    key={uuid()}
                    removeQuote={this.props.removeQuote}
                    downvoteQuote={this.props.downvoteQuote}
                    upvoteQuote={this.props.upvoteQuote}
                  />
                ))}

              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => dispatch(removeQuote(quoteId)),
    downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId)),
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId))
  };
};

//add arguments to connect as needed
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes);
