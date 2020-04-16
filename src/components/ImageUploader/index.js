import React from 'react'
import './ImageUploaderStyle.css'
import UploaderButton from './UploaderButton';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    let reader = new FileReader();
    let file = e.files[0];

    console.log(file)

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <UploaderButton 
          _handleImageChange={this._handleImageChange.bind(this)}
        />
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload