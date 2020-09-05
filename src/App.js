import React from 'react';
import './App.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>1) Situation to practice</h1>
        <Formik
          initialValues={{
            situation: '',
            date: '',
            beginning: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="situation">Situation</label>
            <Field as='textarea' id="situation" name="situation" placeholder="Using a knive" />
            <p></p>
            <label htmlFor="date">Date</label>
            <Field id="date" name="date" placeholder="01.01.2021" />
            
            <p>Please type in your SUDS rating below.</p>
            <label htmlFor="beginning">Beginning</label>
            <Field
              id="beginning"
              name="beginning"
              placeholder="0"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default App;
