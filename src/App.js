import React from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import ProtocolExpositionAndResponsePrevention from './ProtocolExpositionAndResponsePrevention';
import ProtocolExposureHomeworkRecording from './ProtocolExposureHomeworkRecording';
import ProtocolGradedExposureWorksheet from './ProtocolGradedExposureWorksheet';

export default function App() {
  const [protocol, setProtocol] = React.useState("Protokoll für die Exposition mit Reaktionsverhinderung");
  const handleProtocol = (event) => {
    setProtocol(event.target.value);
  };
  
  if (protocol === "Protokoll für die Exposition mit Reaktionsverhinderung") {
    return ( 
      <div>
        <TextField id="protocol" value={protocol} onChange={handleProtocol} label="Protokoll" select>
          <MenuItem key="PER" value="Protokoll für die Exposition mit Reaktionsverhinderung">Protokoll für die Exposition mit Reaktionsverhinderung</MenuItem>
          <MenuItem key="EHRF" value="Exposure Homework Recording Form">Exposure Homework Recording Form</MenuItem>
          <MenuItem key="GEW" value="Graded Exposure Worksheet">Graded Exposure Worksheet</MenuItem>
        </TextField>
        <ProtocolExpositionAndResponsePrevention/>
      </div>  
    );
  }
  if (protocol === "Exposure Homework Recording Form") {
    return (
      <div>
        <TextField id="protocol" value={protocol} onChange={handleProtocol} label="Protokoll" select>
          <MenuItem key="PER" value="Protokoll für die Exposition mit Reaktionsverhinderung">Protokoll für die Exposition mit Reaktionsverhinderung</MenuItem>
          <MenuItem key="EHRF" value="Exposure Homework Recording Form">Exposure Homework Recording Form</MenuItem>
          <MenuItem key="GEW" value="Graded Exposure Worksheet">Graded Exposure Worksheet</MenuItem>
        </TextField>
        <ProtocolExposureHomeworkRecording/>
      </div>
    );
  }
  if (protocol === "Graded Exposure Worksheet") {
    return (
      <div>
        <TextField id="protocol" value={protocol} onChange={handleProtocol} label="Protokoll" select>
          <MenuItem key="PER" value="Protokoll für die Exposition mit Reaktionsverhinderung">Protokoll für die Exposition mit Reaktionsverhinderung</MenuItem>
          <MenuItem key="EHRF" value="Exposure Homework Recording Form">Exposure Homework Recording Form</MenuItem>
          <MenuItem key="GEW" value="Graded Exposure Worksheet">Graded Exposure Worksheet</MenuItem>
        </TextField>
        <ProtocolGradedExposureWorksheet/>
      </div>
    );
  }
}
