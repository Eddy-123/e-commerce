import React, { Component } from "react";
const soapRequest = require("easy-soap-request");

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = props.user;
  }

  getProducts = (event) => {
    console.log("ok");
    // example data
    const url =
      "http://localhost:8080/ProductCatalogSOAPService/services/ProductCatalogServiceImpl";
    const sampleHeaders = {
      "user-agent": "Apache-HttpClient/4.5.5 (Java/11.0.2)",
      "Content-Type": "text/xml;charset=UTF-8",
      soapAction: ""
    };

    const xml =
      '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services.pegaxchange.com">' +
      "<soapenv:Header/>" +
      "<soapenv:Body>" +
      "<ser:getAllProducts/>" +
      "</soapenv:Body>" +
      "</soapenv:Envelope>";

    // usage of module
    (async () => {
      const { response } = await soapRequest({
        url: url,
        headers: sampleHeaders,
        xml: xml,
        timeout: 1000
      }); // Optional timeout parameter(milliseconds)
      const { headers, body, statusCode } = response;
      console.log(headers);
      console.log(body);
      console.log(statusCode);
    })();
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Welcome {username}</h1>
        <p>Here are the products :</p>
        <p>
          {" "}
          <button>PRODUCTS</button>{" "}
        </p>
      </div>
    );
  }
}
