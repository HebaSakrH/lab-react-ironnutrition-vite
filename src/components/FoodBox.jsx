import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const { name, calories, image, servings } = props.food
    const {deleteFood, index} = props
  return (
    <Col>
     <Card title={name} style={{ width: 230, height: 320, margin: 10 }}>
        title={name}
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories} * {servings} </b> kcal
        </p>
        <Button type="primary" onClick={()=> deleteFood(index) }> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;