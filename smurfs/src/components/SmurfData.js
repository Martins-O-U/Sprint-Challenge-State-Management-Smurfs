import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addSmurf} from './states/actionCreators';

const SmurfData = () => {
    const [newSmurf, setNewSmurf] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newHeight, setNewHeight] = useState('')


    const handleChangesSmurf = e => {
        setNewSmurf(e.target.value)
    }
    const handleChangesAge = e => {
        setNewAge(e.target.value)
    }
    const handleChangesHeight = e => {
        setNewHeight(e.target.value)
    }
    const smurf = {name: newSmurf, age: newAge, height: newHeight}
    
    const handleSubmitSmurf = e => {
        e.preventDefault();
 
        addSmurf(smurf);
        setNewSmurf('');
        setNewHeight('');
        setNewAge('');
        console.log(smurf);
        console.log(addSmurf);
    }

    return (
        <div>
            <h2>Add a new Smurf to your village:</h2>
            <form onSubmit={handleSubmitSmurf}>
                <div>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Enter Name...'
                    value={newSmurf}
                    onChange={handleChangesSmurf}>
                    </input>
                    
                    <input
                    type='number'
                    name='Age'
                    placeholder='Enter Age...'
                    value={newAge}
                    onChange={handleChangesAge}>
                    </input>

                    <input
                    type='number'
                    name='Height'
                    placeholder='Smurf Height...'
                    value={newHeight}
                    onChange={handleChangesHeight}>
                    </input>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}
export default connect(mapStateToProps,)(SmurfData);

