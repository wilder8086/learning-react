import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';


  function RenderDish({ dish }) {
    console.log("Dish :" , dish);
    if (dish != null) {
      return (
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    } else {
      return (<div></div>);
    }
  }

  function formattedDate(date){
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
    return (dateString);
  }

  function RenderComments({comments}) {
    console.log("comments :", comments);
    if (comments != null) {
      const commentsLi = comments.map((c) => {
        return (
          <li key={c.id}>
            <p>{c.comment}</p>
            <p>--{c.author, formattedDate(c.date)}</p>
          </li>
        );
      });
      return (
        <div className='col-12 col-md-5 m-1'>
          <h4> Comments </h4>
          <ul className='list-unstyled'>
            {commentsLi}
          </ul>
        </div>
      );
    } else {
      return (<div className="vacio"></div>);
    }
  }

  const Dishdetail = (props) => {
    console.log("DishDetail Component render is invoked :  ", props);
    return (
      <div className="row">
        <RenderDish dish={props.selectedDish}/>
        <RenderComments comments={props.selectedDish?.comments}/>
      </div>
    )
  }



export default Dishdetail;