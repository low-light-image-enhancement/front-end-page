import React, {useEffect, useState} from 'react' 
import { render } from 'react-dom';
import ImageUpload from '../ImageUploader'
import {Col, Row} from 'react-bootstrap'
import PhotoResult from '../PhotoResult'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainPage.css'
import { connect } from 'react-redux';
import DonwloadFile from '../DownloadFile'
import { clickSidebar } from '../../actions';


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
        <Col>
          <input 
                className="btn btn-success filterChangeBtn" 
                type='button' 
                value="필터고르기"
                onClick={()=>clickSidebar(true)}
          />
        </Col>
      </Row>
      <PhotoResult />
      <Row className="histograms" style={{display: isDisplayHistogram}}>
        <Col>
          <div className="font-weight-bold imageStatus h3">
            Before Histogram
            <img src="/images/histoBefore.png" width="500"/>
          </div>
        </Col>
        <Col>
          <div className="font-weight-bold imageStatus h3">
             After Histogram
            <img src="/images/histoAfter.png" width="500"/>
          </div>
        </Col>
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