import React from "react";
import ReactDOM from "react-dom";
import {Download } from '@bit/grommet.grommet-icons.download';


const  DonwloadFile = () => {
  return (
    <button className='btn btn-primary'>
      <Download size='medium'/>
      저장
    </button>
  );
}

export default DonwloadFile;


