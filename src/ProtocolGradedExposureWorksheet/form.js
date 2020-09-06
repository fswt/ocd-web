import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Slider from '@material-ui/core/Slider';
import ToggleButton from '@material-ui/lab/ToggleButton'; // TODO: lab only - secure?
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function valuetext(value) { //TODO: why?
  return `${value}`;
}

export const Form = props => {
    const {
      values: { supportedBy, email, password, confirmPassword },
      errors,
      touched,
      handleChange,
      isValid,
      setFieldTouched
    } = props;
   
    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };

    const [support, setSupport] = React.useState('supported');

    const handleSupport = (event, newSupport) => {
      setSupport(newSupport);
    };
    return (
      <form
        onSubmit={() => {
          alert("submitted");
        }}
      >

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="primary"
          disabled={!isValid}
        >
          Submit
        </Button>
      </form>
    );
};   

