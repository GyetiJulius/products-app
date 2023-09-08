import { Component } from "react";
import React from "react";
import {ProductListComponent} from "./components/product-list/product-list.component";
import "./App.css"
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component{
  constructor(){
    super();
    this.state ={
      productList : [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        const products = data.products; // Extract the "products" array
        this.setState({ productList: products });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const {productList, searchField} = this.state;

    const filteredProducts = productList.filter(products=>
      products.title.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <h1>Products Page</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='Enter product title'
        />
        <ProductListComponent productList={filteredProducts}/>
      </div>
    )
  }
}

export default App;