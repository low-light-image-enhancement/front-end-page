import React, {useEffect, useState} from 'react' 
import { render } from 'react-dom';
import ImageUpload from '../ImageUploader'
import {Col, Row} from 'react-bootstrap'
import PhotoResult from '../PhotoResult'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import DonwloadFile from '../DownloadFile'
import { clickSidebar } from '../../actions';
import Histogram from '../Histogram'
import { Line } from 'react-chartjs-2';
import styles from './MainPage.module.css'


const MainPage = ({isDone, clickSidebar}) => {
  const [isDisplayHistogram, setIsDisplayHistogram] = useState('none')

  useEffect(()=>{
    if(isDone){
      setIsDisplayHistogram('')
    }else{
      setIsDisplayHistogram('none')
    }
  }, [isDone])

  
  return(
    <>
      <Row>
        <Col>
          <ImageUpload />
        </Col>
      </Row>
      <PhotoResult />
      {/* <Row className="histograms mt-3" style={{display: isDisplayHistogram}}> */}
      <Row className="histograms mt-3">
        <Histogram  />
      </Row>
    </>
  )
}

const mapStateToProps = (state) => {
  return { 
    isDone : state.image.isDone,
  }
}

export default connect(mapStateToProps, {clickSidebar})(MainPage)