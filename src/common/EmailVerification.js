import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  otp:{
    marginRight:"2%",
    width:"4%",


  },




}));
export default function EmailVerification() {
  const classes = useStyles();

    return (

      

        <div>
            <h1>Enter your OTP</h1>
            <br/>
            <p>For your security, we need to verify your identity. We sent a 5-digit<br/>
                       code to name@domain.com. Please enter it below</p>
                       <br/>

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" /> 
       
                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       



        </div>
    )
}
