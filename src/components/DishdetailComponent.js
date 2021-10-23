import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {
  console.log("Dish :", dish);
  if (dish != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardImg width="100%" src={ baseUrl + dish.image} alt={dish.name} />
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

function formattedDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateString = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  return (dateString);
}

function RenderComments({ comments, postComment, dishId }) {
  console.log("comments :", comments);
  if (comments != null) {
    const commentsLi = comments.map((c) => {
      console.log("uno : ", c);
      return (
        <li key={c.id}>
          <p>{c.comment}</p>
          <p>--{c.author}, {formattedDate(c.date)}</p>
        </li>
      );
    });
    return (
      <div className='col-12 col-md-5 m-1'>
        <h4> Comments </h4>
        <ul className='list-unstyled'>
          {commentsLi}
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  } else {
    return (<div className="vacio"></div>);
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isNavOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    console.log("ggggg", this.state);
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    console.log("El estado actual es : " + JSON.stringify(values));
    alert("El estado actual es : " + this.props.dishId + ", " + JSON.stringify(values));
    //event.preventDefault();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-comments fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Label className='font-weight-bold' htmlFor='rating'>Rating</Label>
              <Control.select model=".rating" name="rating" className="form-control">
                <option >1</option>
                <option selected>2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
              </Control.select>
              <br />
              <Label className='font-weight-bold' htmlFor='name'>Your Name</Label>
              <Control.text model=".author" id="author" name="author"
                placeholder="Your Name" className="form-control"
                validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
                }} />
              <Errors
                className="text-danger"
                model=".name"
                show="touched"
                messages={{
                  required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less'
                }} />
              <br />
              <Label className='font-weight-bold' htmlFor='rating'>Comment</Label>
              <Control.textarea model=".comment" id="comment" name="comment"
                rows="6" className="form-control" />
              <br />
              <Button type="submit" color="primary">Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}


const Dishdetail = (props) => {
  console.log("DishDetail Component render is invoked :  ", props);
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else {
    if (props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    } else {
      if (props.dish != null) {
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <RenderDish dish={props.dish} />
              <RenderComments comments={props.comments}
                postComment={props.postComment}
                dishId={props.dish.id} />
              />
            </div>
          </div>
        )
      }  
    }
  }    
}



export default Dishdetail;