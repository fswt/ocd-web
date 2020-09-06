import React from "react";
import ToggleButton from '@material-ui/lab/ToggleButton'; // TODO: lab only - secure?
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from "@material-ui/core/TextField";

export const SupportSwitch = props => {

    const [support, setSupport] = React.useState('supported');

    const handleSupport = (event, newSupport) => {
      setSupport(newSupport);
    };

    return(
        <div>
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
                helperText={props.touched.supportedBy ? props.errors.supportedBy : ""}
                error={props.touched.supportedBy && Boolean(props.errors.supportedBy)}
                label="Begleitet durch"
                value={props.supportedBy.value}
                onChange={props.change.bind(null, "supportedBy")}
                fullWidth
            />
            : null }
        </div>
    );
}
