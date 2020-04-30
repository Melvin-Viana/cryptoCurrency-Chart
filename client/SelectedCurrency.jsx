import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const SelectedCurrency = (props) => {
  return (<React.Fragment>
     <InputLabel id="demo-controlled-open-select-label" style={{marginLeft:"auto"}}>Crypto Currency</InputLabel>
  <Select
  labelId="demo-controlled-open-select-label"
  id="demo-controlled-open-select"
  onChange={(event)=>props.selectCurrency(event.target.value)}
  value={props.currency}
  >
    <MenuItem value="BTC" selected={true}>Bitcoin</MenuItem>
    <MenuItem value="BSV">Bitcoin SV</MenuItem>
    <MenuItem value={"ETH"}>Ethereum</MenuItem>
    <MenuItem value="BCH">Bitcoin Cash</MenuItem>
  </Select>
  </React.Fragment>)

}

export default SelectedCurrency;