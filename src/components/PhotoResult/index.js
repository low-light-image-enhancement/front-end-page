import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap'
import './ImageResultStyle.css'
import DonwloadFile from '../DownloadFile';
import FilterSideBar from '../Sidebar'
import ImageConverter from '../ImageConverter';
import { clickSidebar, imageDone } from '../../actions';
import Progress from '@bit/semantic-org.semantic-ui-react.progress'
import styles from './ImageResult.module.css'
import Filter from '@bit/feathericons.react-feather.filter';
import { getRandomColor } from '@bit/joshk.jotils.get-random-color';
import Button from '@bit/semantic-org.semantic-ui-react.button'


const PhotoResult = ({imageUrl, clickSidebar, resultImageUrl, imageDone}) => {
  
  const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

  const [percent, setPercent] = useState(0);
  const [isDisplayResult, setIsDisplayResult] = useState('none');
  const [isDisplayProgress, setIsDisplayProgress] = useState('none');
  const [filter, setFilter] = useState(' ');
  const [filterOpen, setFilterOpen] = useState(false);
  


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

  const getFilterClass = () => {
    switch(filter){
      case 'HE':
        return styles.original
      case 'LIME' :
        return styles.contrast
      case 'Ying':
        return styles.brightness
      case 'CycleGAN':
        return styles.saturation
      default:
        return styles.original
    }
  }

  const filterClick = (filterName) => {
    setFilter(filterName);
  }

  const filterMenuClick = () => {
    setFilterOpen(!filterOpen)
  }

  const isFilterOpen = () => {
    if(filterOpen){
      return 'block'
    }else{
      return 'none'
    }
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
      <Row className='mt-2'>
        {/* <Col xl={6} lg={12}>
          <div class="font-weight-bold text-white h3 mb-3">
            처리 전
          </div>
          <div className="imgPreview shadow mb-5 rounded">
            <div className={`${styles.previewDiv} ${styles.notProcessed}`}>
              {imagePreview()}
            </div>
          </div>
        </Col> */}
        <Col xl={12} lg={12}>
          <div class="font-weight-bold text-white h3 mb-3 mt-4 text-center">
            결과
          </div>
          <div className="imgPreview shadow mb-5 rounded">
            {myProgressBar()}
            <div style={{display: isDisplayResult}}>
              <div onClick={() => filterMenuClick()}>
                <Button.Group color='black'>
                  <Button>
                    <Filter size='20' color="blue"/>
                    <div>
                      다른결과
                    </div>
                  </Button>
                </Button.Group>
              </div>
              <div className={styles.sampleImgs} style={{display: isFilterOpen()}}>
                <div className={`${styles.sampleImgContainer} text-white`}  onClick={() => filterClick('HE')}>
                    <div className={styles.sampleImg}  style={{backgroundImage:`url(${resultImageUrl})`}}></div>
                    <div>HE</div>
                  </div>
                  <div className={`${styles.sampleImgContainer} text-white`} onClick={() => filterClick('Ying')}>
                    <div className={`${styles.sampleImg} ${styles.brightness}`} style={{backgroundImage:`url(${resultImageUrl})`}}></div>
                    <div>Ying</div>
                  </div>
                  <div className={`${styles.sampleImgContainer} text-white`} onClick={() => filterClick('LIME')}>
                    <div className={`${styles.sampleImg} ${styles.contrast}`} style={{backgroundImage:`url(${resultImageUrl})`}}></div>
                    <div>LIME</div>
                  </div>
                  <div className={`${styles.sampleImgContainer} text-white`} onClick={() => filterClick('CycleGAN')}>
                    <div className={`${styles.sampleImg} ${styles.saturation}`} style={{backgroundImage:`url(${resultImageUrl})`}}></div>
                    <div>CycleGAN</div>
                  </div>
              </div>
            </div>
       
            <div className={`${styles.previewDiv} ${styles.processed}`}>
              <img src={resultImageUrl} style={{display: isDisplayResult}} className={getFilterClass()}/>
            </div>
          </div>
        </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mb-4">
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