import React from 'react';

const BookFilter = (props) => {

    const filters = ["All", "Web", "Mobile", "DevOps", "Essentials"];
    return (
      <div>

        {filters.map(filter => (
          <li
            className={filter === props.selectedFilter ? "active" : ""}
            key={filter}
            onClick={() => this.selectFilter(filter)}
          >
            <a href="#0">{filter}</a>
          </li>
        ))}
      </div>

    )
}

export default BookFilter;
