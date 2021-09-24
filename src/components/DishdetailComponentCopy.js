import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';


function RenderDish({ dish }) {
  console.log("Dish :", dish);
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg top src={dish.image} alt={dish.name} width="100%" />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function formattedDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateString = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  return (dateString);
}

function RenderComments({ comments }) {
  console.log("comments :", comments);
  if (comments != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <h4> Comments </h4>
        <ul className='list-unstyled'>
          {comments.map((c) => {
            return (
              <li key={c.id}>
                <p>{c.comment}</p>
                <p>--{c.author, formattedDate(c.date)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (<div className="vacio"></div>);
  }
}

const Dishdetail = (props) => {
  console.log("DishDetail Component render is invoked :  ", props);
  if(props.dish != null){
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish}/>
          <RenderComments comment={props.dish.comments}/>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}



export default Dishdetail;