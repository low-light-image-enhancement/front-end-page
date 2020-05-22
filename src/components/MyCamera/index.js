import React, {useEffect, useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
const MyCamera = (props) => {

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
        console.log('takePhoto');
    }
    
    return (
        <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        />
    );
}
 
export default MyCamera;