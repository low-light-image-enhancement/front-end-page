import React, {useState, useEffect} from 'react'

const ImageConverter = (img) =>{
    if(img){
        img = withImage(img);
        return (
            <img src={img}/>
        )
    }
    else{
        return(<></>)
    }
}

// // 필터 버튼 클릭 이벤트 발생시
// $('#filterButton').on('click', function () {
//     // imageData를 가져온다.
//     // 캔버스에서의 이미지를 가져옴, 우리가 만든 곳에서이미지를 가져와야함.
//     var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);

//     // image processing
    
//     var filteredData = brightnessFilter(pixels,100);
    
//     // Canvas에 다시 그린다.
//     ctx.putImageData(filteredData, 0 , 0);
// });

function withImage(img){
    var pixels = img.getImageData(0,0,img.width,img.height);


    var filteredData = brightnessFilter(pixels,100);

    return filteredData;
}
// 밝기 필터
// 예시 : var filteredData = brightnessFilter(pixels, 100);
function brightnessFilter(pixels, value) {
    var d = pixels.data;
    for(var i =0; i< d.length; i+=4){
        d[i] += value/3;   //R
        d[i+1] += value/3; //G
        d[i+2] += value/3; //B
    }
    return pixels;
}

