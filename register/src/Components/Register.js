import { useState, useEffect } from "react";
import "./Register.css";


function Register() {
  const initialValues =
  {
    email: "",
    password: "",
    phone: "",
    firstname: "",
    lastname: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // setIsSubmit("");
    console.log(formValues);
    
    
    fetch("http://35.208.65.24:3007/customers/signup",{
      method: "POST",
     // no-cors, *cors, same-origin
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify(formValues)
      
    }).then(function(response){
      return response.json();
    }).then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
    // fetch("http://35.208.65.24:3007/customers",{
    //   method:"GET"
    // })
    // .then(response=>{
    //     return response.json();
    // }).then(file=>{
    //   console.log(file.dat);
    // })

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.zipcode) {
      errors.zipcode = "Zip code is required";
    }

    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }

    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (values.phone.length < 10 || values.phone.length>10 ) {
      errors.phone = "Phone no must be 10 characters";
    }
    return errors;
  };

    // setFormValues("");
   // setIsSubmit(initialValues);

  return (
    <div className="container">


      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="ui divider"></div>
        <div className="ui form">

          <div className="field">
            <label>Email</label>
            <input 
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <label>Phone </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>

          <div className="field">
            <label>Fisrt Name </label>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              value={formValues.firstname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstname}</p>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastname}</p>

          <div className="field">
            <label>Address </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address}</p>

          <div className="field">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              placeholder="Address 2"
              value={formValues.address2}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address2}</p>

          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.city}</p>

          <div className="field">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formValues.state}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.state}</p>

          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formValues.country}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.country}</p>

          <div className="field">
            <label>Zip code</label>
            <input
              type="tel"
              name="zipcode"
              placeholder="Zip Code"
              value={formValues.zipcode}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.zipcode}</p>

    


          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;