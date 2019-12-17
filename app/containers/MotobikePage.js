import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import MotoBikeList from '../components/MotorBike/MotoBikeList';
import {
  getAll,
  addMotoBike,
  deleteMotoBike,
  updateMotoBike,
  selectMotoBike
} from '../actions/motoBike.actions';
import {getErrs} from '../actions/erros.actions';

const mapStateToProps = state=>{
  return {
    motoBikes: state.motoBike,
    updateData: state.selectMotoBike,
    errs: state.errs
  }
};

const MotoBikePage = (props)=>{
  const {getAll, motoBikes} = props;
  useEffect(()=>{
    getAll()
  }, [])
    
    if(localStorage.getItem('jwt')){
      return(
        <Wrapper>
            <MotoBikeList motoBikeProps={props} />
        </Wrapper>
    )
     }else{
      return(
        <OfflineWrapper>
            <MotoBikeList motoBikeProps={props} />
        </OfflineWrapper>
    )
     }
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addMotoBike,
    deleteMotoBike,
    updateMotoBike,
    selectMotoBike,
    getErrs
  }
)(MotoBikePage);