import React from 'react';
import HostWrapper from './HostWrapper';
import OfflineWrapper from './OfflineWrapper';

const Wrapper = ({children})=>{
  if(localStorage.getItem('jwt')){
    return <HostWrapper>{children}</HostWrapper>
  }else{
    return <OfflineWrapper>{children}</OfflineWrapper>
  }
}

export default Wrapper