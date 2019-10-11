import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf} from './states/actionCreators';

const SmurfVillage = ({ smurfs,  getSmurf }) => {
	useEffect(
		() => {
			getSmurf();
		},
		[ getSmurf ]
	);

	return (
		<div>
			{smurfs.map((smurf) => {
				return (
					<div key={smurf.id} className='card'>
                    <h3>Smurf's Name: {smurf.name}</h3>
                    <h5>Smurf's Age: {smurf.age}</h5>
                    <h5>Smurf's Height: {smurf.height}</h5>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
	};
};

export default connect(mapStateToProps, { getSmurf })(SmurfVillage);


