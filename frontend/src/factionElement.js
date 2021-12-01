import { render } from '@testing-library/react';
import React, {Component, useState, useEffect }  from 'react';
import apiCall from './api';
import './App.css';
//import ReactDOM from  'react-dom';

function factionElement(props, fName, tier, hold, rep, player, notes) {
    return (
      //<div class='faction-box'>
      //  <div class='faction-name'>{fName}</div>|
      //  <div class='faction-tier'>Tier {tier}{' '}{hold}</div>|
      //  <div class='faction-rep'>{rep}</div>
      //</div>

    <div class='faction-box'>
        <div align='left' class='faction-name'>{fName}</div>
        <div align='right' class='faction-tier'>Tier {tier}{' '}{hold}</div>
        <div align='right' class='faction-rep'>{rep}</div>
    </div>
    );
}

export default factionElement;