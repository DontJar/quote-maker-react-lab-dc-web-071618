import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addQuote } from "../actions/quotes";

class QuoteForm extends Component {
  state = {
    content: "",
    author: "",
    votes: 0
  };

  handleOnChange = event => {
    let stateChange = event.target.id;
    this.setState({
      [stateChange]: event.target.value
    });
  };

  handleOnSubmit = event => {
    // debugger;
    event.preventDefault(event);
    this.props.addQuote({
      id: uuid(),
      content: this.state.content,
      author: this.state.author,
      votes: 0
    });
    this.setState({
      content: "",
      author: "",
      votes: 0
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  className="form-horizontal"
                  onSubmit={e => this.handleOnSubmit(e)}
                >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">
                      Quote
                    </label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        id="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">
                      Author
                    </label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        id="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { addQuote: quote => dispatch(addQuote(quote)) };
};

//add arguments to connect as needed
export default connect(
  null,
  mapDispatchToProps
)(QuoteForm);
/*null,
  mapDispatchToProps*/
