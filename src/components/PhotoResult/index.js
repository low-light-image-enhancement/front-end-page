import React from 'react'
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap'
 import './ImageResultStyle.css'
import DonwloadFile from '../DownloadFile';
import FilterSideBar from '../Sidebar'
import { clickSidebar } from '../../actions';

const PhotoResult = ({imageUrl, clickSidebar}) => {

  const sidebarClick = () => {
    clickSidebar(true);
  }

  const imagePreview = () => {
    if(imageUrl){
      return(
        <img src={imageUrl}/>
      )
    }else{
      return <></>
    }
  }

  return(
    <div>
      <Row>
        <Col lg={6} md={12}>
          <div class="font-weight-bold imageStatus h3">
            처리 전
          </div>
          <div className="imgPreview shadow p-3 mb-5 bg-white rounded">
            {imagePreview()}
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div class="font-weight-bold imageStatus h3">
            결과 이미지
          </div>
          <div className="imgPreview shadow p-3 mb-5 bg-white rounded">
          </div>
          <div className="buttonInline">
            <input 
              className="btn btn-success customBtn" 
              type='button' 
              value="필터고르기"
              onClick={() => sidebarClick()}
            />
            <DonwloadFile />
          </div>
        </Col>
        </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    imageUrl : state.image.imageUrl
  }
}

export default connect(mapStateToProps, {clickSidebar})(PhotoResult);