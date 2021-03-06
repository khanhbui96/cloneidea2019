import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import OfflineAbout from "../components/OfflineAbout"
import {getCurrentUser} from '../actions/user.actions';

const mapStateToProps = state=>{
  return {
    
  }
};

const GuestAboutPage = (props)=>{
  const {getCurrentUser} = props
  useEffect(()=>{
  }, [])
    return(
        <Wrapper>
            <OfflineAbout/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getCurrentUser
  }
)(GuestAboutPage);