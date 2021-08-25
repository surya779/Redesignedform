import React from 'react';
import {Checkbox, TextField } from '@material-ui/core';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import { position } from 'dom-helpers';
import Phonenumber from './Phonenumber';
import PhoneInput from 'react-phone-number-input'
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'react-phone-number-input/style.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';



const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname:null,
      yearsofexperience:null,
      jobtitle:null,
      email: null,
      // url= "./assets/logo.png",
      errors: {
        
        email: '',
        
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
 
    var formdata=localStorage.getItem("formdata");
    formdata=JSON.parse(formdata);
    formdata[0][name]=value;
    localStorage.setItem("formdata",JSON.stringify(formdata));
    switch (name) {
      
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }
  // selectfile=(event)=>{
        
//     if(event.target.files){
//         var reader=new FileReader();
//         reader.readAsDataURL(event.target.files[0]);
//         reader.onload=(e:any)=>{
//           url=e.target.result;
//         //   this.form_data[0]["Company Logo"]=this.url;
//         }
  
//       }
  
// };
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
         
          <div>
          
          
            <h1>Add Your Company Details</h1>
            
           {/* <div> <p>
                <label className="imgupload" for="file-input">
                  <img src={url} height="70" />
                </label>
                &nbsp;<span>Upload your company logo</span>
                <input id="file-input" style={{opacity:0}} type="file" onChange={selectfile}  />   

              </p>
              </div> */}

        {/* For CompanyDetails*/}

            <form className="root" noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Company Name" name="companyname" onChange={this.handleChange} size="small" variant="outlined" />
            </form>
            <br></br>
            <br/>
        {/* For Email*/}

            <div className='email'>
                <FormControl className="formControl">
                <TextField id="outlined-basic" onChange={this.handleChange} name='email' label="Email id" size="small" variant="outlined" noValidate required/>

              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
                </FormControl>
            </div>
            <br></br>
            <br/>
         {/* For Job Title*/}

            <form className="root" noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Job title" name="jobtitle" onChange={this.handleChange} size="small" variant="outlined" />
            </form>
            <br></br>
            <br/>
            <form className="root" noValidate autoComplete="off">

          {/* For Years Of Experience*/}

            <TextField id="outlined-basic" label="Years of Experience" name="yearsofexperience" onChange={this.handleChange} size="small" variant="outlined" />
            </form>
            <br></br>
            <br/>
         {/* For Checkbox*/}

            <FormControlLabel control={<Checkbox name="checked" />} label="I accept the Terms and Conditions" />
            
          </div>
        </div>
      </div>
    );
  }
}
