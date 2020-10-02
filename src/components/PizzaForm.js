import React from "react"

const PizzaForm = (pizzas) => {

  const handleClick = (e) => {
    e.preventDefault()
    console.log(pizzas.updatedPizza.topping)
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                pizzas.updatedPizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizzas.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <form>
          <div className="form-check">
            <input className="form-check-input" name="veg" type="radio" value="Vegetarian" checked={pizzas.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="veg" type="radio" value="Not Vegetarian" checked={pizzas.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
          </form>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
