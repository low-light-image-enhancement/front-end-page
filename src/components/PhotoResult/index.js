import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap'
import './ImageResultStyle.css'
import DonwloadFile from '../DownloadFile';
import FilterSideBar from '../Sidebar'
import ImageConverter from '../ImageConverter';
import { clickSidebar, imageDone } from '../../actions';
import Progress from '@bit/semantic-org.semantic-ui-react.progress'

const PhotoResult = ({imageUrl, clickSidebar, resultImageUrl, imageDone}) => {
  
  const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

  const [percent, setPercent] = useState(0);
  const [isDisplayResult, setIsDisplayResult] = useState('none');
  const [isDisplayProgress, setIsDisplayProgress] = useState('none');

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

  
  const myProgressBar = () => {
    return(
      <div>
        {style}
        <Progress 
          percent={percent} 
          indicating
          style={{display: isDisplayProgress}}
        >
          {percent}
        </Progress>
      </div>
    )
  }
  
  useEffect(() => {
    setTimeout(() =>{
      if(percent < 100 && percent!=0){
        setIsDisplayProgress('block')
        setIsDisplayResult('none')
        setPercent(percent+10)
      }else if(percent >= 100){
        setIsDisplayProgress('none')
        setIsDisplayResult('block')
        imageDone(true)
      }
    }, 500)
  }, [percent])

  useEffect(()=>{
    if(resultImageUrl){
      // start progress
      setPercent(1);
    }else{

    }
  }, [resultImageUrl])



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
            처리 후
          </div>
          <div className="imgPreview shadow p-3 mb-5 bg-white rounded">
            {myProgressBar()}
            
            <img src={resultImageUrl} style={{display: isDisplayResult}}/>
          </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <a
            href="/images/이후.png"
            download
            className="buttonInline"
            >
              <DonwloadFile />
          </a>
          </Col>
        </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    imageUrl : state.image.imageUrl,
    resultImageUrl: state.image.resultImageUrl
  }
}

export default connect(mapStateToProps, {clickSidebar, imageDone})(PhotoResult);