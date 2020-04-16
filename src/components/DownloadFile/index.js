import React from "react";
import ReactDOM from "react-dom";
import {Download } from '@bit/grommet.grommet-icons.download';


const  DonwloadFile = () => {
  return (
      <a
        href="/images/이후.png"
        download
        >
          <button className='btn btn-primary customBtn'>
            <Download size='medium'/>
            저장
          </button>

        
    </a>
  );
}

export default DonwloadFile;


