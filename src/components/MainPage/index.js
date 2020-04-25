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
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom';


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
      {/* <Row>
        <h1><font color='white'> Low-light image enhancement testing page</font>
          </h1>
      </Row>
      <Row>
        <p><font color='white'> 본 페이지는 밝기가 어두운 사진을 높여주는 사이트입니다.</font>
          </p>
      </Row>
      <Row>
        <p><font color='white'> 사진의 밝기를 높이는데 사용된 알고리즘을 적용한 결과도 비교할 수 있습니다.</font>
          </p>
      </Row>
      <Row>
        <p><font color='white'> 또한 변화된 히스토그램의 모양을 비교할 수 있습니다.</font>
          </p>
      </Row> */}
      <Row>
        <Col>
          <ImageUpload />
        </Col>
      </Row>
      <PhotoResult />
  
      <Row className="histograms mt-3" style={{display: isDisplayHistogram}}>
      {/* <Row className="histograms mt-3 shadow-lg rounded"> */}
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