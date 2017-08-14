import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
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

export default Book;
