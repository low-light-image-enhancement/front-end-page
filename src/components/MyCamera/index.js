import React, {useEffect, useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 import history from '../../history';
 import {imageProcess} from '../../actions';
 import { connect } from 'react-redux';
const MyCamera = ({imageProcess}) => {

    const [source, setSource] = useState("");
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then(handleVideo)
            .catch(videoError)
    }, []);

    const handleVideo = (stream) => {
        setSource(window.URL.createObjectURL(stream))
      }
    
    const videoError = (err) => {
        alert(err.name)
      }


    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log(dataUri);
        console.log('takePhoto');
        imageProcess(dataUri);
        setInterval(()=> {
            history.push('/main');
        }, 1000);
    }
    
    return (
        <Camera
            onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            
            isFullscreen = {true}
        />
    );
}
 
export default connect(null, {imageProcess})(MyCamera)