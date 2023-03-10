import React from "react";

class App extends React.Component {
  state = {
    items: [
      {id: 1, name: 'apple', price: '1000'},
      {id: 2, name: 'pineapple', price: '2000'},
      {id: 3, name: 'watermelion', price: '3000'},
    ]
  }
  
  add = (name, price) => {
    let id = this.state.items.length + 1
    this.setState({
      items: [...this.state.items, {id, name, price}]
    })
  }
  render() {
    return (
      <div>
        <h4>React App</h4>
        <ul>
            {
              this.state.items.map(i => {
                return (
                  <Item key={i.id} name={i.name} price={i.price} />
                )
              })
            }
        </ul>
        <AddForm add={this.add} />
      </div>
    )
  }
}

class Item extends React.Component {
  render() {
    return (
      <li> {this.props.name} {this.props.price} </li>
    )
  }
}

class AddForm extends React.Component {
  nameRef = React.createRef()
  priceRef = React.createRef()
  add = () => {
    let name = this.nameRef.current.value
    let price = this.priceRef.current.value

    this.props.add(name, price)
    
    this.nameRef.current.value = ''
    this.priceRef.current.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef} /> <br/>
        <input type="number" ref={this.priceRef} /> <br/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default App