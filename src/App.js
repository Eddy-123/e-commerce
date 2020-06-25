import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Layouts
import MainLayout from "./layouts/MainLayout";
import ProductListLayout from "./layouts/ProductListLayout";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Registration from "./components/Registration";
import Login from "./components/Login";

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
              <ProductListLayout>
                <ProductList />
              </ProductListLayout>
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
          <Route
            path="/login"
            render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )}
          />
          <Route
            /*component={Default}*/ render={() => (
              <MainLayout>
                <Default />
              </MainLayout>
            )}
          />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
