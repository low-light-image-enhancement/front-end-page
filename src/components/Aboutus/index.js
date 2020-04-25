import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  const log = () => {
    console.log("clicked")
  }
  return (
    <div className="text-white mt-4 pt-4">
      <h2 className="mt-4">
        본 페이지는 
      </h2>
      <h2 className="font-weight-bold">
        밝기가 어두운 사진을 높여주는 사이트입니다.
      </h2>
      <br/>
      <h2>
        사진의 밝기를 높이는데 사용된 알고리즘을 적용한 결과도 비교할 수 있습니다
      </h2>
      <h2 onClick={() => log()}>
        또한 변화된 히스토그램의 모양을 비교할 수 있습니다. 
      </h2>
      <br/>
      <div className="btn btn-success" onClick={() => log()}>
          <Link to="/" className="text-white" onClick={() => log()}>
            이미지 변환하러 가기
          </Link>
      </div>
    </div>
  )
}

export default Aboutus;