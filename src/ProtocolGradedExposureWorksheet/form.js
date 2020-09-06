import React from "react";
import Button from "@material-ui/core/Button";
import { SituationFearSlider } from "../Components/SituationFearSlider";

function valuetext(value) { //TODO: why?
  return `${value}`;
}

export const Form = props => {
    const {
      values: { situation },
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
        <div>
          Construct a staircase with situations you tend to avoid because of fear or anxiety, with most-feared at the top and least-feared items at the bottom. Rate each item according to how distressed you would feel if you encountered that situation, on a scale from 0 to 10 (0 = not at all distressed and 10 = extremely distressed).
        </div>

        <div>Least Feared Situation</div>
        {[...Array(10)].map((e, i) => <SituationFearSlider situation key={i}/>)}
        <div>Most Feared Situation</div>
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

