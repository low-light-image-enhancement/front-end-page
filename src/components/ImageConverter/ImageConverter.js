
// canvas 객체 생성
// var canvas = $('#canvas')[0];
// var ctx = canvas.getContext('2d');

// 드로우 방법
// function drawImageData(image) {
//     image.height *= canvas.offsetWidth / image.width;
//     image.width = canvas.offsetWidth;

//     if(image.height > canvas.offsetHeight){
//         image.width *= canvas.offsetHeight / image.height;
//         image.height = canvas.offsetHeight;
//     }

//     ctx.drawImage(image, 0, 0, image.width, image.height);
// }

// 클릭 이벤트
// $('#loadButton').on('change', function (e) {
//     var file = e.target.files[0];
//     var fileReader = new FileReader();

//     fileReader.onload = function (e) {
//         var image = new Image();
//         image.src = e.target.result;
//         image.onload = function () {
//             drawImageData(image);
//         }
//     };

//     fileReader.readAsDataURL(file);
// });

// 이미지 그려주기
// function drawImageData(image) {
//     image.height *= canvas.offsetWidth / image.width;
//     image.width = canvas.offsetWidth;

//     if(image.height > canvas.offsetHeight){
//         image.width *= canvas.offsetHeight / image.height;
//         image.height = canvas.offsetHeight;
//     }

//     ctx.drawImage(image, 0, 0, image.width, image.height);
//     console.log(ctx.getImageData(0,0, canvas.width, canvas.height));
// }

// 필터 버튼 클릭 이벤트 발생시
$('#filterButton').on('click', function () {
    // imageData를 가져온다.
    // 캔버스에서의 이미지를 가져옴, 우리가 만든 곳에서이미지를 가져와야함.
    var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);

    // image processing
    
    var filteredData = brightnessFilter(pixels,100);
    
    // Canvas에 다시 그린다.
    ctx.putImageData(filteredData, 0 , 0);
});

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

// don't paste here
// build histogram of specified image region
function histogram(image, x1, y1, x2, y2, num_bins) {
    if( num_bins == undefined )
        num_bins = 256;
    var h = image.h, w = image.w;
    var hist = [];
    var i, x, y, idx, val;
    // initialize the histogram
    for(i=0;i<num_bins;++i)
        hist[i] = 0;
    // loop over every single pixel
    for(y=y1,idx=0;y<y2;++y) {
        for(x=x1;x<x2;++x,idx+=4) {
            // figure out which bin it is in
            val = Math.floor((image.data[idx] / 255.0) * (num_bins-1));
            ++hist[val];
        }
    }
    return hist;
}