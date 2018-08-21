import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<div className='shadow-5 white ba br3 bw2 b--white-40'>
				<p className='f3'>
					{'This amazing app will detect faces in your pictures. Give it a try!'}
				</p>
			</div>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;