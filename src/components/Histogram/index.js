import React from 'react'
import {Col} from 'react-bootstrap'
import { Line } from 'react-chartjs-2';

const beforeData = {
  labels: ['26', '52', '78', '104', '130', '156', '182', '208', '234', '255'],
  datasets: [
    {
      label: 'Before Histogram',
      fill: false,
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
      label: 'After Histogram',
      fill: false,
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