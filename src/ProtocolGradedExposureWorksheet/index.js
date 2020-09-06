import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup"

const styles = theme => ({
 paper: {
   marginTop: theme.spacing(8),
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`
 },
 container: {
   maxWidth: "200px"
 }
});

class ProtocolGradedExposureWorksheet extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {
    const classes = this.props;
    const values = { supportedBy: "", email: "", confirmPassword: "", password: "" };
    return (
  <React.Fragment>
      <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
          <h1>Graded Exposure Worksheet</h1>
          <Formik 
            initialValues={values}
            validationSchema={validationSchema}
          >
            {props => <Form {...props} />}  
          </Formik>
          </Paper>
      </div>
  </React.Fragment>
  );
  }  
}

const validationSchema = Yup.object({
    supportedBy: Yup.string("Enter a name")
    .required("Name der begleitenden Person wird benötigt"),
    email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
    password: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
    confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")})

export default withStyles(styles)(ProtocolGradedExposureWorksheet);
