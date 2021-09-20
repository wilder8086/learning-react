import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("Hola1");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log("Hola2");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("Hola3 : "+new Date());
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/*flujo de datos «descendente» o «unidireccional», El componente Clock encapsula su estado y como no es accesible desde otros componentes, pero este (Clock) se lo pasa a su componente hijo FormattedDate como props, FormattedDate no sabe si esas props vino del estado de su componente Clock (padre), de las props de Clock o si se escribió manualmente
        */}
        <FormattedDate date={this.state.date} />
      </div>
    );
  }  
}  

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}


export default Clock;