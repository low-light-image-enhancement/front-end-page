import React from 'react';
import { Growl } from '@bit/primefaces.primereact.growl';
import { FileUpload } from '@bit/primefaces.primereact.fileupload';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

class UploaderButton extends React.Component {
	constructor() {
		super();
		this.onUpload = this.onUpload.bind(this);
	}

	onUpload(event) {
    console.log(event.target)
		this.growl.show({
			severity: 'info',
			summary: 'Success',
			detail: 'File Uploaded'
		});
  }
  
  onChange(e) {
    console.log(e.files[0]);
  }

	render() {
		return (
			<div className='content-section implementation'>
				<PrimereactStyle />

				<FileUpload
					mode='basic'
					name='demo[]'
					url='./upload.php'
					accept='image/*'
					maxFileSize={1000000}
					onSelect={(e) => this.props._handleImageChange(e)}
					onProgress={(e) => this.props.onUpload(e)}
					onUpload={this.onBasicUpload}
				/>
				{/* <FileUpload
					name='demo[]'
					url='./upload.php'
					onUpload={this.onUpload}
					multiple={true}
					accept='image/*'
          maxFileSize={1000000}
					onSelect={(e) => this.props._handleImageChange(e)}
					onProgress={(e) => this.props.onUpload(e)}
				/> */}
				<Growl
					ref={el => {
						this.growl = el;
					}}
				/>
			</div>
		);
	}
}

export default UploaderButton;