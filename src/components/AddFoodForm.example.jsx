
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
const [name ,setName] = useState('')
const [image, setImage] = useState('')
const [calories, setCalories] = useState(0)
const [servings, setServings] = useState(0)


  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
