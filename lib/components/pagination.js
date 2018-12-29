import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PagePagination extends Component {
  constructor(props) {
    super(props);
    this.renderPagination = this.renderPagination.bind(this);
  }

  renderPagination(array) {
    return array.map(index => (
      <PaginationItem
        active={this.props.current_page == index + 1 ? true : false}
        key={index + 1}
      >
        <PaginationLink onClick={() => this.props.pageClick(index + 1)}>
          {index + 1}
        </PaginationLink>
      </PaginationItem>
    ));
  }

  render() {
    return (
      <Pagination style={{ cursor: "pointer" }} className="pull-right">
        <PaginationItem disabled={this.props.current_page <= 1 ? true : false}>
          <PaginationLink previous onClick={() => this.props.previousClick()} />
        </PaginationItem>
        {this.renderPagination([...Array(this.props.end_page).keys()])}
        <PaginationItem
          disabled={
            this.props.current_page < this.props.end_page ? false : true
          }
        >
          <PaginationLink next onClick={() => this.props.nextClick()} />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default PagePagination;
