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

      <ToggleButtonGroup //TODO: conditional validation
        value={support}
        exclusive
        onChange={handleSupport}
        aria-label="support"
      >
        <ToggleButton value="supported" aria-label="left aligned">
          begleitet
        </ToggleButton>
        <ToggleButton value="alone" aria-label="centered">
          in Eigenregie
        </ToggleButton>
      </ToggleButtonGroup>

      { support === "supported" ? 
        <TextField
          id="supportedBy"
          name="supportedBy"
          helperText={touched.supportedBy ? errors.supportedBy : ""}
          error={touched.supportedBy && Boolean(errors.supportedBy)}
          label="Begleitet durch"
          value={supportedBy}
          onChange={change.bind(null, "supportedBy")}
          fullWidth
        />
        : null }

        <TextField
          id="email"
          name="email"
          helperText={touched.email ? errors.email : ""}
          error={touched.email && Boolean(errors.email)}
          label="Email"
          fullWidth
          value={email}
          onChange={change.bind(null, "email")}
   
        />
        <TextField
          id="password"
          name="password"
          helperText={touched.password ? errors.password : ""}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={change.bind(null, "password")}
   
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          helperText={touched.confirmPassword ? errors.confirmPassword : ""}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          label="Confirm Password"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={change.bind(null, "confirmPassword")}
   
        />
        <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
        />
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

