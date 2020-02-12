import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [state, setState] = useState({
    username: "",
    usernameError: "",
    passwordError: "",
    mainErr: "",
    userType: "",
    dashboard: false,
    columns: [
      { title: "Items", field: "items", show: true },
      {
        title: "Required Qty",
        field: "requiredQty",
        type: "numeric",
        show: true
      },
      { title: "vendor1", field: "vendor1", type: "numeric", show: true },
      { title: "vendor2", field: "vendor2", type: "numeric", show: true },
      {
        title: "Received Qty",
        field: "receivedQty",
        type: "numeric",
        show: true
      },
      { title: "Status", field: "status", show: true },
      { title: "Bakery", field: "bakery", show: true },
      { title: "Italian", field: "italian", show: true },
      { title: "Indian", field: "indian", show: true }
    ],
    data: [
      { items: "Flour" },
      {
        items: "Wheat",
        requiredQty: "20KG",
        vendor1: "10KG",
        vendor2: "10KG",
        receivedQty: "10KG",
        status: "OK",
        bakery: "N",
        italian: "Y",
        indian: "Y"
      },
      {
        items: "Rice",
        requiredQty: "20KG",
        vendor1: "0",
        vendor2: "20KG",
        receivedQty: "20KG",
        status: "",
        bakery: "N",
        italian: "Y",
        indian: "Y"
      },
      {
        items: "Multigrain",
        requiredQty: "5KG",
        vendor1: "0KG",
        vendor2: "1KG",
        receivedQty: "1KG",
        status: "Insufficient",
        bakery: "N",
        italian: "Y",
        indian: "N"
      },
      {
        items: "Fats"
      },
      {
        items: "Butter",
        requiredQty: "5KG",
        vendor1: "2KG",
        vendor2: "1KG",
        receivedQty: "3KG",
        status: "Insufficient",
        bakery: "Y",
        italian: "Y",
        indian: "N"
      },
      {
        items: "Olive",
        requiredQty: "3KG",
        vendor1: "3KG",
        vendor2: "0KG",
        receivedQty: "3KG",
        status: "Insufficient",
        bakery: "Y",
        italian: "Y",
        indian: "N"
      },
      {
        items: "Mustard",
        requiredQty: "8KG",
        vendor1: "0KG",
        vendor2: "6KG",
        receivedQty: "6KG",
        status: "Insufficient",
        bakery: "N",
        italian: "N",
        indian: "Y"
      },
      {
        items: "Vegetable",
        requiredQty: "0KG",
        vendor1: "0KG",
        vendor2: "0KG",
        receivedQty: "0KG",
        status: "Insufficient",
        bakery: "N",
        italian: "N",
        indian: "Y"
      },
      {
        items: "Vegetables"
      },
      {
        items: "Mushroom",
        requiredQty: "5KG",
        vendor1: "2KG",
        vendor2: "3KG",
        receivedQty: "5KG",
        status: "OK",
        bakery: "N",
        italian: "Y",
        indian: "N"
      },
      {
        items: "Baby Corn",
        requiredQty: "5KG",
        vendor1: "3KG",
        vendor2: "2KG",
        receivedQty: "5KG",
        status: "OK",
        bakery: "N",
        italian: "Y",
        indian: "N"
      },
      {
        items: "Onion",
        requiredQty: "15KG",
        vendor1: "12KG",
        vendor2: "0KG",
        receivedQty: "12KG",
        status: "Insufficient",
        bakery: "N",
        italian: "Y",
        indian: "Y"
      },
      {
        items: "Capsicum",
        requiredQty: "5KG",
        vendor1: "2KG",
        vendor2: "1KG",
        receivedQty: "3KG",
        status: "Insufficient",
        bakery: "N",
        italian: "Y",
        indian: "N"
      },
      {
        items: "Add-Ons"
      },
      {
        items: "Salt",
        requiredQty: "5KG",
        vendor1: "2KG",
        vendor2: "3KG",
        receivedQty: "5KG",
        status: "OK",
        bakery: "Y",
        italian: "Y",
        indian: "Y"
      },
      {
        items: "Olive",
        requiredQty: "5KG",
        vendor1: "3KG",
        vendor2: "2KG",
        receivedQty: "5KG",
        status: "OK",
        bakery: "Y",
        italian: "N",
        indian: "N"
      },
      {
        items: "Sugar",
        requiredQty: "15KG",
        vendor1: "12KG",
        vendor2: "0KG",
        receivedQty: "12KG",
        status: "Insufficient",
        bakery: "Y",
        italian: "N",
        indian: "Y"
      },
      {
        items: "Vanilla",
        requiredQty: "5KG",
        vendor1: "2KG",
        vendor2: "1KG",
        receivedQty: "3KG",
        status: "Insufficient",
        bakery: "Y",
        italian: "N",
        indian: "N"
      }
    ]
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Login {...props} setState={setState} state={state} />
          )}
        />
        <Route
          path="/dashboard"
          render={props => (
            <Dashboard {...props} setState={setState} state={state} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;