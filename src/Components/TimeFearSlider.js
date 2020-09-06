import React from "react";
import TextField from "@material-ui/core/TextField";
import Slider from '@material-ui/core/Slider';
import InputAdornment from '@material-ui/core/InputAdornment';

export const TimeFearSlider = props => {
    return(
        <div>
            <TextField
                id="time"
                name="time"
                label="Zeit"
                fullWidth
                value={props.time.value}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Min</InputAdornment>,
                }}
            />
            <div>
                Angst
            </div>
            <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
            />
        </div>
    );
}