import React,{useState} from "react"
const App=()=>{
  const[Data,setData]=useState({
    username:"",
    fullname:"",
    password:"",
    mail:"",
    dob:"",
    gender:"male",
    address:""
  })
  const{username,fullname,password,mail,dob,gender,address}=Data;
  const onChangeHandler=(event)=>{
    setData({...Data,[event.target.name]:[event.target.value]})
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    if(username===""){
      alert("enter username")
    }
    else if(fullname===""){
      alert("enter fullname")
    }
    else if(password===""){
      alert("enter password")
    }
    else if(mail===""){
      alert("enter mailname")
    }
    else if(address===""){
      alert("enter validaddress")
    }
    else if(dob===""){
      alert("choose dateof birth")
    }
    else if(gender===""){
      alert("select gender")
    }
    else{
      console.log(Data);
    }
  }
   return (
    <div>
      <form onSubmit={submitHandler}>
        <label>username</label>
        <input type="text" name="username" onChange={onChangeHandler}/>
        <br/>
        <label>fullname</label>
        <input type="text" name="fullname" onChange={onChangeHandler}/>
        <br/>
        <label>password</label>
        <input type="password" name="password" onChange={onChangeHandler}/>
        <br/>
        <label>mail</label>
        <input type="mail" name="mail"onChange={onChangeHandler}/>
        <br/>
        <label>date of birth</label>
        <input type="date" name="dob"onChange={onChangeHandler}/>
        <br/>
        <label>male</label>
        <input type="radio" name="gender"onChange={onChangeHandler}/>
        <label>female</label>
        <input type="radio" name="gender"onChange={onChangeHandler}/>
        <br/>
        <label>address</label>
        <input type="text" name="address"onChange={onChangeHandler}/>
        <br/>
        <input type="submit"/>
      </form>


    </div>
  );
}

export default App;
