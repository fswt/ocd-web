import React from "react";
import TextField from "@material-ui/core/TextField";
import Slider from '@material-ui/core/Slider';
import InputAdornment from '@material-ui/core/InputAdornment';

export const SituationFearSlider = props => {
    return(
        <div>
            <TextField
                id="situation"
                name="situation"
                label="Situation"
                fullWidth
                value={props.situation.value}
            />
            <div>
                Fear
            </div>
            <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
            />
        </div>
    );
}