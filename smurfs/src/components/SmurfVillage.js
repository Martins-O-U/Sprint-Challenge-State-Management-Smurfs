import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from './states/actionCreators';

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
					<div key={smurf.id}>
						<p>{smurf.name}</p>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
    debugger
	return {
		smurfs: state.smurfs,
	};
};

export default connect(mapStateToProps, { getSmurf })(SmurfVillage);

