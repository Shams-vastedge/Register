import React,{useEffect,useState} from 'react'


function User() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://35.208.65.24:3007/customers").then((result)=>{
      result.json().then((resp)=>{
        // console.log(resp)
        setUser(resp.data)
      })
    })
  },[])
  console.log(users)
  
  return (
    <div>
      <h1>REGISTERED USER DETAILS </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Phone</td>
          <td>Address</td>
          <td>Address2</td>
          <td>City</td>
          <td>State</td>
          <td>Country</td>

        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.address2}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.country}</td>
          
            
          </tr>
          )
        }
       </tbody>
      </table>
    </div>

    
  );
}
export default User;


