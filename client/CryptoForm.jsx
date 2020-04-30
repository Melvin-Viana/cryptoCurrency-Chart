import React from 'react';
import LiveSwitch from './LiveSwitch.jsx';
import FormGroup from '@material-ui/core/FormGroup';
import SelectedCurrency from './SelectedCurrency.jsx';
const CryptoForm = (props) =>
  (<FormGroup row style={{alignItems:"center"}}>
      <LiveSwitch isLive={props.isLive} handleChange={props.handleChange}
        />
      <SelectedCurrency selectCurrency={(e)=>props.handleCurrencyChange(e)} currency={props.currency}/>
  </FormGroup>);

export default CryptoForm;