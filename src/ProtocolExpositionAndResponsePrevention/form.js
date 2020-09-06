import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { SupportToggle } from "../Components/SupportSwitch";
import { TimeFearSlider } from "../Components/TimeFearSlider";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputAdornment from '@material-ui/core/InputAdornment';


function valuetext(value) { //TODO: why?
  return `${value}`;
}

export const Form = props => {
    const {
      values: { supportedBy, time, overallDuration },
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

    return (
      <form
        onSubmit={() => {
          alert("submitted");
        }}
      >

        <SupportToggle touched errors supportedBy change={change}/>
        <div>
          Beschreibung der Auslösesituation
        </div>
        <TextareaAutosize aria-label="description trigger situation" rowsMin={5} placeholder="Ich bin in der Küche und halte ein Messer in der Hand"/>

        <div>
          Welche Zwangshandlungen dürfen nicht durchgeführt werden?
        </div>
        <TextareaAutosize aria-label="compulsions to prevent" rowsMin={5} placeholder="Hinlegen und aufheben des Messers"/>
        
        {[...Array(10)].map((e, i) => <TimeFearSlider time />)}

        
        <TextField
                id="overallDuration"
                name="overallDuration"
                label="Gesamtdauer"
                fullWidth
                value={overallDuration}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Min</InputAdornment>,
                }}
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

