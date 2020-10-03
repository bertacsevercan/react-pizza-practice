import React from "react"

const PizzaForm = ({updatedPizza, setupdatedPizza, handleEdit}) => {

  const handleChange = (e, key) => {
    
    setupdatedPizza({
      ...updatedPizza,
      [key] : e.target.value
    })
  }
  const handleCheck = (e, key) =>{ 
    const value = e.target.value === "Vegetarian" ? true : false
    setupdatedPizza({
      ...updatedPizza,
      [key] : value
    })
  } 

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                updatedPizza.topping
              } onChange={(e) => handleChange(e, "topping")} />
        </div>
        <div className="col">
          <select value={updatedPizza.size} className="form-control" onChange={(e) => handleChange(e, "size")}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <form>
          <div className="form-check">
            <input className="form-check-input" name="veg" type="radio" value="Vegetarian" checked={updatedPizza.vegetarian} 
            onChange={(e) => handleCheck(e, "vegetarian")}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="veg" type="radio" value="Not Vegetarian" 
            onChange={(e) => handleCheck(e, "vegetarian")}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
          </form>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" 
          onClick={(e) => handleEdit(e, updatedPizza.topping, updatedPizza.size, updatedPizza.vegetarian, updatedPizza.id)}>
            Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
