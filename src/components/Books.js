import React from "react";
import books from "../mocks/books";
import BookList from './Books/BookList';
import BookFilter from './Books/BookFilter';

class Books extends React.Component {
    constructor(props){
        super(props);
       
        this.state = {
            books,
            selectedFilter: "All"}
        ;
    }

    selectFilter = filter => {
        this.setState({
          selectedFilter: filter,
          books:
            filter === "All"
              ? books
              : books.filter(book => book.category === filter)
        });
      };

    render() {
        // const filters = ["All", "Web", "Mobile", "DevOps", "Essentials"];

        // const tabItems = filters.map(filter => (
        //   <li
        //     className={filter === this.state.selectedFilter ? "active" : ""}
        //     key={filter}
        //     onClick={() => this.selectFilter(filter)}
        //   >
        //     <a href="#0">{filter}</a>
        //   </li>
        // ));

        return(
                <section id="books">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2>Books</h2>
                        <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <ul className="nav nav-pills text-center">
                            <BookFilter selectedFilter={this.state.selectedFilter} selectFilter={this.selectFilter} />
                            </ul>
                        </div>
                    </div>
                    <BookList books={this.state.books} />
                </div>
            </section>
        )
    }
}

export default Books;