import React from 'react';
import { connect } from 'react-redux';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input);
  }

  render() {
    let titleInput;
    return (
      <div>
        <ul>
          {this.props.books.map((book, i) => <li key={i}>{book.title}</li>)}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            const input = {title: titleInput.value};
            this.submitBook(input);
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
