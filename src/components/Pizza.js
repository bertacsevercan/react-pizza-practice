import React, {Fragment} from "react"

const Pizza = ({pizzas, handleEdit}) => {

  return(
    <Fragment>
    {pizzas.map(pizza=> (<tr key={pizza.id}>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian === true ? "Yes" : "No"}</td>
      <td><button type="button" onClick={(e) => handleEdit(e,pizza.topping,pizza.id)} className="btn btn-primary">Edit Pizza</button></td>
    </tr>))}
    </Fragment>
  )
}

export default Pizza

