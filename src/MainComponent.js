import React ,{useState} from 'react';
import './App.css';
import {Table,Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Form, Input } from 'reactstrap';
import  Navs  from './Nav'

const mapStateToProps = state =>{
  return {
    data:state.data
  }
}

const mapDispachToProps = dispatch =>{
  return {
    onDelItem:(id) =>dispatch({type:"DEL_ITEM",key:id}),
    onAddItem:(id,name,email,prod,quan) =>dispatch({type:"ADD_ITEM",value:{"id":id,
                                                    "customer_name":name,
                                                    "customer_email":email,
                                                    "product":prod,
                                                    "quantity":quan}})
  }
}



function MainComponent(props) {

  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [prod,setProd] = useState("");
  const [quan,setQuan] =useState();
  
 
  


  const handleEvents = (event,value) => {
    switch(value){
      case "ID":
        setId(event.target.value);
        break;
      case "NAME":
        setName(event.target.value);
        break;
      case "EMAIL":
        setEmail(event.target.value);
        break;
      case "PRODUCT":
        setProd(event.target.value);
        break; 
      case "QUANTITY":
        setQuan(event.target.value);
        break; 
      }
  } 

const handleSubmit = (event) =>{
  props.onAddItem(id,name,email,prod,quan)
  event.preventDefault()
}



return (
    <div className="App">
    <Navs uname={props.username} upic={props.userpic} uemail={props.useremail}/>
    <Form >
      <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th> email</th>
          <th> product</th>
          <th> quantity</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
           <Input type="text" value={id}  placeholder="ID" onChange={(event) => handleEvents(event,"ID")}/>  
        </td>
        <td>
           <Input type="text" value={name}  placeholder="customer Name" onChange={(event) => handleEvents(event,"NAME")}/>  
        </td>
        <td>
           <Input type="email" value={email}  placeholder="Customer Email" onChange={(event) => handleEvents(event,"EMAIL")}/>  
        </td>
        <td>
           <Input type="select" value={prod}  placeholder="Product" onChange={(event) => handleEvents(event,"PRODUCT")}>
           <option>Product 1</option>
           <option>Product 2</option>
           <option>Product 3</option> 
           </Input> 
        </td>
        <td>
           <Input type="number" step="1"  placeholder="Quantity" onChange={(event) => handleEvents(event,"QUANTITY")}/>
           <br/>
           <Button onClick={(event)=>handleSubmit(event)} color="primary">ADD ITEM</Button>
             
        </td>
      </tr>
        {props.data.map((d) => {
          return(<tr onClick={()=>props.onDelItem(d.id)} title="CLICK TO DELETE ME">
            <th scope="row">{d.id}</th>
            <td>{d.customer_name}</td>
            <td>{d.customer_email}</td>
            <td>{d.product}</td>
            <td>{d.quantity}</td>
          </tr>)})}
      </tbody>
    </Table>
    </Form>
    </div>
  );




}

export default connect(mapStateToProps,mapDispachToProps)(MainComponent);
