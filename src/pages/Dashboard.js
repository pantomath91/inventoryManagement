import React from "react";
import Header from "../components/Header";
import MaterialTable from "material-table";

export default function Dashboard(props) {
  props.state.data.status = props.state.data.filter(function(data) {
    if (data.requiredQty && data.receivedQty) {
      if (data.requiredQty > data.receivedQty) {
        return (data.status = "Insufficient");
      }
      return (data.status = "OK");
    }
    return null;
  });
  if (props.state.username === "IndianChef") {
    props.state.columns = props.state.columns.filter(function(data) {
      return !(
        data.field === "vendor1" ||
        data.field === "vendor2" ||
        data.field === "bakery" ||
        data.field === "italian" ||
        data.field === "indian"
      );
    });
    props.state.data = props.state.data.filter(function(data) {
      return data.indian === "Y";
    });
  }
  if (props.state.username === "ItalianChef") {
    props.state.columns = props.state.columns.filter(function(data) {
      return !(
        data.field === "vendor1" ||
        data.field === "vendor2" ||
        data.field === "bakery" ||
        data.field === "italian" ||
        data.field === "indian"
      );
    });
    props.state.data = props.state.data.filter(function(data) {
      return data.italian === "Y";
    });
  }
  if (props.state.username === "BakeryChef") {
    props.state.columns = props.state.columns.filter(function(data) {
      return !(
        data.field === "vendor1" ||
        data.field === "vendor2" ||
        data.field === "bakery" ||
        data.field === "italian" ||
        data.field === "indian"
      );
    });
    props.state.data = props.state.data.filter(function(data) {
      return data.bakery === "Y";
    });
    props.state = props.setState(props => {props.state = [...props.data]});
  }
  return (
    <div className="Order_Div">
      <Header />
      <MaterialTable
        title="Editable Example"
        true
        columns={props.state.columns}
        data={props.state.data}
        editable={{
          isDeletable: () => props.state.username === "Manager",
          isEditable: () => props.state.username === "Manager",
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                props.setState(props => {
                  const data = [...props.data];
                  data.push(newData);
                  return { ...props, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  props.setState(props => {
                    const data = [...props.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...props, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                props.setState(props => {
                  const data = [...props.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...props, data };
                });
              }, 600);
            })
        }}
      />
    </div>
  );
}
