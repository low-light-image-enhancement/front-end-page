import React from 'react' 
import ImageUpload from '../ImageUploader'
import {Col, Row} from 'react-bootstrap'
import PhotoResult from '../PhotoResult'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainPage.css'

const MainPage = () => {
  return(
    <Row>
      <Col lg={6} md={12}>
        <div class="font-weight-bold imageStatus h3">
          처리 전
        </div>
        <ImageUpload />
      </Col>
      <Col lg={6} md={12}>
        <div class="font-weight-bold imageStatus finishedText h3">
          결과 이미지
        </div>
        <PhotoResult />
      </Col>
    </Row>
  )
}


export default MainPage