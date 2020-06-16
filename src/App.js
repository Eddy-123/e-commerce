import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Registration from "./components/Registration";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<Navbar />*/}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout>
                <ProductList />
              </MainLayout>
            )}
          />
          <Route
            path="/details"
            render={() => (
              <MainLayout>
                <Details />
              </MainLayout>
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <MainLayout>
                <Cart />
              </MainLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
