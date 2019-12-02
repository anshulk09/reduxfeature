import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import tempAction from '../actions/tempAction';
import store from '../store/store'

class New extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // this.props.tempAction();
    }
    render(){
        const {count, dispatch, isLoading} = this.props;
        console.log(store)
        console.dir(this.props)
        return (
        <div>
            hello world
            My React App can go through
            {/* <button onClick={handleOnClick}>Inc Count</button> */}
            {/* <p>{count[0]}</p> */}
        </div>)
    }
}

const mapStateToProps = (state={}) => {
    return {...state}
}

const mapDispatchToProps = 
   {tempAction : tempAction}

export default connect(mapStateToProps)(New);
