import React from 'react'
import {Col,Row} from 'react-bootstrap'
import { Line } from 'react-chartjs-2';

// 나중에 히스토그램 데이터만 가져오려면 x,y 값이 필요
function histogram(image, x1, y1, x2, y2, num_bins) {
  if( num_bins == undefined )
      num_bins = 256;
  var h = image.h, w = image.w;
  var hist = [];
  var i, x, y, idx, val;
  // 초기화
  for(i=0;i<num_bins;++i)
      hist[i] = 0;
  // 픽셀마다 
  for(y=y1,idx=0;y<y2;++y) {
      for(x=x1;x<x2;++x,idx+=4) {
          val = Math.floor((image.data[idx] / 255.0) * (num_bins-1));
          ++hist[val];
      }
  }
  return hist;
}
const beforeData = {
  labels: ['26', '52', '78', '104', '130', '156', '182', '208', '234', '255'],
  datasets: [
    {
      fill: false,
      label: 'Before Histogram',
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // 여기가 데이터 셋
      data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 10]
    }
  ]
};


const afterData = {
  labels: ['26', '52', '78', '104', '130', '156', '182', '208', '234', '255'],
  datasets: [
    {
      fill: false,
      label: 'Before Histogram',
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // 여기가 데이터 셋
      data: [20, 35, 40, 70, 90, 90, 75, 45, 20, 10]
    }
  ]
};
const Histogram = () => {
  return(
    <>
    <Col>
      <div className="font-weight-bold imageStatus h3 text-white">
        Before Histogram
        <Line data={beforeData} />      
      </div>
    </Col>
    <Col>
      <div className="font-weight-bold imageStatus h3 text-white">
          After Histogram
          <Line data={afterData} />      
      </div>
    </Col>
    </>
  )
}

export default Histogram