import React from 'react';
import Rank from '../Rank/Rank';
import './ImageLinkForm.css';

const ImageLinkForm = ({ name, entries, onInputChange, onImageSubmit }) => {
	return (
		<div>
			<div className='shadow-5 white ba br3 bw2 b--white-40'>
				<p className='f3'>
					{'This app will detect faces in your pictures. Give it a try!'}
				</p>
				<p className='f5'>
					{'Here\'s an example image for you to get started:'}
				</p>
				<p className='f5'>
					{'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg'}
				</p>
			</div>
			<Rank name={ name } entries={ entries } />
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
						onKeyPress={event => {
							if(event.charCode === 13) {
							onImageSubmit();
						}}}
						type='text' 
						className='f4 pa2 w-70 center' onChange={onInputChange} />
					<button 
						style={{background: '#375e97'}}
						className='w-30 grow f4 link ph3 pv2 dib white'
						onClick={onImageSubmit}
						onKeyPress={event => {
							if(event.charCode === 13) {
							onImageSubmit();
						}}}
					>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;