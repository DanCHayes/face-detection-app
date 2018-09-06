import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`Hi ${name}, you have entered`}
			</div>
			<div className='white f1'>
				{entries}
			</div>
			<div className='white f3'>
				{`images!`}
			</div>
		</div>
	);
}

export default Rank;