import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Calculation from '../components/Calculation/Calculation';
import {getAll, selectDefineLevel} from '../actions/defineLevel.actions';

const mapStateToProps = state=>{
  return {
    defineLevels: state.defineLevel,
    updateData: state.selectDefineLevel
  }
}
const CalculationPage = (props)=>{
  const {getAll, defineLevels} = props;
  useEffect(()=>{
    getAll()
  }, [defineLevels.isUpdate])
   if(localStorage.getItem('jwt')){
    return(
      <Wrapper>
          <Calculation defineLevelProps={props}/>
      </Wrapper>
  )
   }else{
    return(
      <OfflineWrapper>
          <Calculation defineLevelProps={props}/>
      </OfflineWrapper>
  )
   }
}
export default connect(
  mapStateToProps,
  {
    getAll,
    selectDefineLevel
  }
)(CalculationPage);