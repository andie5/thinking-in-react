import React from "react";

class Books extends React.Component {
    constructor(props){
        super(props);
       
        this.state = ({books: {}});
    }
    


    render() {
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
                    <ul className="nav nav-pills text-center">{this.props.tabItems}</ul>
                    </div>
                </div>
                <div className="row book-list">
                    {this.state.books.map(book => (
                    <div className="col-xs-6 col-sm-3" key={book.id}>
                        <div className="thumbnail">
                        <img alt="" className="img-responsive" src={book.cover} />
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        )
    }
}

export default Books;