import React from "react";
import ReactDOM from "react-dom";
import {Download } from '@bit/grommet.grommet-icons.download';
import styles from './DonwloadFile.module.css'


const  DonwloadFile = () => {
  return (
    <button className={` btn btn-success`}>
      <Download size='medium'/>
      저장
    </button>
  );
}

export default DonwloadFile;


