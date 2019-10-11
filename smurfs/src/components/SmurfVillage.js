import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./states/actionCreators";

export function SmurfList({ getSmurf, smurfs }) {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);
  return (
    <>
      {
         smurfs.map(smurf => (
            <div className="card" key={smurf.id}>
              <div className='name'><i>{smurf.name}</i></div>
			  <div className='ageHeight'>
				<div className='age'><strong>Age: </strong> {smurf.age}</div>
				<div className='height'><strong>Height: </strong>{smurf.height}</div>
			  </div>
            </div>
          ))
     }
      {}
    </>
  );
}

export default connect(
  function mapStateToProps(state) {
    return {
      smurfs: state.api
    };
  },
  actionCreators
)(SmurfList);