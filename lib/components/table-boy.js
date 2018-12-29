import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

class TableBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_no: 1,
      sort_on: "id",
      sort_order: "DESC"
    };
    this.renderTitle = this.renderTitle.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.fetchPage = this.fetchPage.bind(this);
    this.nestedAttributes = this.nestedAttributes.bind(this);
    this.defaultTd = this.defaultTd.bind(this);
    this.showAction = this.showAction.bind(this);
    this.editAction = this.editAction.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
    this.openPanelAction = this.openPanelAction.bind(this);
  }

  componentDidMount() {
    this.props.pagination_method(this.state.page_no);
  }

  fetchPage(page_no, sort_on) {
    var sort;
    this.setState({ sort_on: sort_on });
    this.state.sort_order == "DESC" ? (sort = "ASC") : (sort = "DESC");
    this.state.sort_order == "DESC"
      ? this.setState({ sort_order: "ASC" })
      : this.setState({ sort_order: "DESC" });
    this.setState({ page_no: page_no });
    this.props.pagination_method(page_no, sort_on, sort);
  }

  nestedAttributes(value, attribute) {
    var m = value[`${attribute[0]}`];
    var i;
    for (i = 1; i < attribute.length; i++) {
      if (typeof m == "object") {
        var n = m[attribute[i]];
        m = n;
      }
    }
    return m;
  }
  showAction(value) {
    return (
      <Link
        to={`${this.props.action_methods.show.link}${
          this.props.action_methods.show.show_on
            ? value[this.props.action_methods.show.show_on]
            : value.id
        }`}
        className={
          this.props.action_className && this.props.action_className.show
            ? this.props.action_className.show(
                value[`${this.props.action_className.onChange}`]
              )
            : "btn-action btn-success"
        }
      >
        <i className="mdi mdi-eye" />
      </Link>
    );
  }
  editAction(value) {
    return (
      <Link
        to={`${this.props.action_methods.edit}${value.id}`}
        className={
          this.props.action_className && this.props.action_className.edit
            ? this.props.action_className.edit(
                value[`${this.props.action_className.onChange}`]
              )
            : "btn-action btn-warning"
        }
      >
        <i className="mdi mdi-lead-pencil" />
      </Link>
    );
  }
  deleteAction(value) {
    return (
      <a
        className="btn-action btn-danger"
        href="#"
        onClick={() =>
          this.props.action_methods
            .delete(value.id)
            .then(() => this.props.pagination_method(this.state.page_no))
        }
      >
        <i className="mdi mdi-delete-forever" />
      </a>
    );
  }
  openPanelAction(value) {
    return (
      <button
        className="btn-action btn-success"
        onClick={() => this.props.action_methods.openPanel(value.id)}
      >
        <i className="mdi mdi-eye" />
      </button>
    );
  }
  defaultTd(value, title) {
    return typeof title.attribute == "object" ? (
      <h5>
        <span
          className={
            typeof title.className == "function"
              ? title.className(
                  value[`${this.nestedAttributes(value, title.attribute)}`]
                )
              : title.className
              ? title.className
              : ""
          }
        >
          {this.nestedAttributes(value, title.attribute)}
        </span>
      </h5>
    ) : (
      <h5>
        <span
          className={
            typeof title.className == "function"
              ? title.className(value[`${title.attribute}`])
              : title.className
              ? title.className
              : ""
          }
        >
          {value[`${title.attribute}`]}
        </span>
      </h5>
    );
  }

  renderTitle(titles) {
    if (titles) {
      return titles.map((title, index) =>
        title.sortable ? (
          <th
            key={index}
            style={{ cursor: "pointer" }}
            className={
              this.state.sort_order == "DESC"
                ? "responsive-table-sort sort-asc"
                : "responsive-table-sort sort-desc"
            }
            onClick={() => this.fetchPage(this.state.page_no, title.attribute)}
          >
            {title.title}
          </th>
        ) : (
          <th key={index}>{title.title}</th>
        )
      );
    }
  }
  renderBody(values) {
    if (values) {
      return values.map((value, index) => (
        <tr key={index}>
          <td>
            <span className="round round-index">{index + 1}</span>
          </td>
          {this.props.titles.map((title, i) =>
            title.attribute == "actions" ? (
              <td key={i}>
                {this.props.action_methods.show ? this.showAction(value) : ""}
                {this.props.action_methods.edit ? this.editAction(value) : ""}
                {this.props.action_methods.delete
                  ? this.deleteAction(value)
                  : ""}
                {this.props.action_methods.openPanel
                  ? this.openPanelAction(value)
                  : ""}
              </td>
            ) : (
              <td key={i}>
                {title.customTd ? (
                  <h5>{title.className(value[`${title.attribute}`])}</h5>
                ) : (
                  this.defaultTd(value, title)
                )}
              </td>
            )
          )}
        </tr>
      ));
    }
  }
  render() {
    return (
      <div className="table-responsive">
        <table className="table stylish-table">
          <thead>
            <tr>
              <th style={{ width: "90px" }}>#</th>
              {this.renderTitle(this.props.titles)}
            </tr>
          </thead>
          <tbody>{this.renderBody(this.props.body)}</tbody>
        </table>
        <hr className="m-t-20 m-b-20 b-b" />
        {this.props.values.page_length > 1 ? (
          <Pagination
            current_page={this.state.page_no}
            end_page={
              this.props.values.page_length ? this.props.values.page_length : ""
            }
            previousClick={() => this.fetchPage(this.state.page_no - 1)}
            nextClick={() => this.fetchPage(this.state.page_no + 1)}
            pageClick={index => this.fetchPage(index)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TableBoy;
