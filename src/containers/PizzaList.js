import React, { Component } from "react";
import Pizza from "../components/Pizza";
function PizzaList({pizzas, handleEdit}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <Pizza handleEdit={handleEdit} pizzas={pizzas}></Pizza>
      </tbody>
    </table>
  );
}

export default PizzaList;
