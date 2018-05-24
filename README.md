
# Table Boy

An easy to use react table with server side pagination and server side sorting, which makes creating tables fun. No jquery dependancy.

## Getting Started

Look at github page

### Prerequisites

This is a component made by react for react.
```
Give examples
```

### Installing

npm i table-boy
```
import TableBoy from 'table-boy'
```

```
<TableBoy 
    titles={[{title:"heading",attribute:"value",sortable:"yes",customTd:"yes",className:"class"/*or for customTD */ (data)=>this.customClassName(data)}]}  
    values={values with pagination count}
    body={values without pagination count, raw data for table body alone}//content-alone
    pagination_method={method to call the data from server side}
    action_methods={action methods, show edit delete and openPAnel is already given}
    action_className={{action:(value)=>this.actionCustomClass(value),onChange:"value"}}
/>
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


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With



## Contributing

Please read [CONTRIBUTING.md](https://github.com/shanshaji/table-boy/blob/master/CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

. 

## Authors

* **Shan Shaji** - *Initial work* - [ecommerce](https://github.com/shanshaji/Ecommerce)

See also the list of [contributors](https://github.com/shanshaji/table-boy/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
