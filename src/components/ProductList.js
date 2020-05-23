import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data.js";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(storeProducts);
    return (
      <React.Fragment>
        <div className="my-5">
          <div className="container">
            <div className="row">
              <Title name="our" title="product" />
              {/*<Product />*/}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
