import React from 'react' 
import ImageUpload from '../ImageUploader'
import {Col, Row} from 'react-bootstrap'
import PhotoResult from '../PhotoResult'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainPage.css'
import { connect } from 'react-redux';
import DonwloadFile from '../DownloadFile'

const MainPage = () => {
  return(
    <>
      <div>
      </div>
      <ImageUpload />
      <PhotoResult />
    </>
  )
}



export default MainPage