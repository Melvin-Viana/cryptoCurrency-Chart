import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const LiveSwitch = (props) => {
  return (
      <FormControlLabel
          control={<Switch checked={props.isLive} onChange={props.handleChange} name="checkedA" />}
          label={"Live Data"}
        />
  )
}

export default LiveSwitch;