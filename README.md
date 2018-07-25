
# Table Boy

An easy to use react table with server side pagination and server side sorting, which makes creating tables fun. No jquery dependancy.

## Getting Started

Look at github page

### Prerequisites

This is a component made by react for react.
```
react, react-router are required for this app to run

```

### Installing

```
npm i table-boy

```
Import table-boy to your Component

```
// ES6
import TableBoy from 'table-boy';
// ES5
var TableBoy = require("table-boy").default;

```
That's it you're done. Now you can easily build tables, with server side pagination and server side sorting.

But What if you only need pagination and no table?, Well you can achieve that by just importing our pagination component
```
import {Pagination} from 'table-boy';
```

```
<TableBoy 
    titles={[{title:"heading",attribute:"value",sortable:"yes",customTd:"yes",className:"class"//or for customTD (data)=>this.customClassName(data)}]}  
    values={values with pagination count}
    body={values without pagination count, raw data for table body alone}//content-alone
    pagination_method={method to call the data from server side}
    action_methods={action methods, show edit delete and openPAnel is already given}
    action_className={{action:(value)=>this.actionCustomClass(value),onChange:"value"}}
/>
```
```
<Pagination 
    current_page={current_page_no} 
    end_page={total_number_of_pages} 
    previousClick={()=>this.fetchPage(current_page_no-1)} //action to get data of previous page, since we are using server side pagination
    nextClick={()=>this.fetchPage(current_page_no+1)} //action to get data of next page, since we are using server side pagination
    pageClick={(index)=>this.fetchPage(index)} // this action will fetch data, when a page number is clicked
/>
// NOTE: action name can be anything, its the way you define the action.
```
example:

```
<TableBoy 
    titles={[{title: "Name", attribute: "name",sortable:"yes"},{title: "Language", attribute: ["language", "name"],sortable:"yes"},{title: "Format", attribute: ["format", "name"]},{title: "Certificate", attribute: ["certificate", "name"]},{title: "Actions", attribute: "actions"}]} // title will be the title of table, attribute will be the attribute of db table, which data we need to show in body[use array to call something like language.name], sortable to toggle sort, 
    values={this.props.movies.movies ? this.props.movies:''}//with page_number for pagination
    body={this.props.movies.movies}//content-alone
    pagination_method={this.props.fetchMovies}
    action_methods={{edit:"/movies/edit/",delete:this.props.deleteMovie,
    dispatch:this.props.dispatch}}// dispatch an action, for example delete.
/>
```
simple example 
```
<TableBoy 
    titles={[{title:"heading",attribute:"value"}]}  
    values={values with pagination count}
    body={values}
    pagination_method={method to call the data from server side}
/>

```


## Built With React



## Contributing

Please read [CONTRIBUTING.md](https://github.com/shanshaji/table-boy/blob/master/CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Shan Shaji** - *Initial work* - [ecommerce](https://github.com/shanshaji/Ecommerce)

See also the list of [contributors](https://github.com/shanshaji/table-boy/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Hats off to RubyKraft for the support
