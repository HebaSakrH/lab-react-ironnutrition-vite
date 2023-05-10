import "./App.css";
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row, Divider, Button } from "antd";

function App() {
  const [foodList, setFoodList] = useState(foods);

  function searchFood(search) {
    console.log(search);
   const searchResults = foodList.filter(food => {
    return food.name.toLowerCase().includes(search.toLowerCase())
   })
   setFoodList(searchResults)
  }

  function deleteFood(index) {
 const updateFood = [...foodList]
 updateFood.splice(index, 1)
 setFoodList(updateFood)
  }

  return (
    <div className="App">
      <div className="App">
        <h1>Food List</h1>
        {foodList.map((food, i) => (
          <FoodBox key={i} food={food} index= {i} deleteFood={deleteFood}/>
        ))}
      </div>
      <AddFoodForm setFoods={setFoodList} />
      <Button> Hide Form / Add New Food </Button>

      <Search searchFood={searchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
