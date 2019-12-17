import axios from 'axios';
const callApi = (method, endpoint, data)=>{
    
    if (localStorage.getItem('jwt')){
        return axios({
            method,
            data,
            url: `http://80.211.189.66/api${endpoint}`
        }
        )
    }else{
        if(endpoint.indexOf('users') == -1){
            return axios({
                method,
                data,
                url: `http://localhost:3000/api${endpoint}`
            })
        }else{
            return axios({
                method,
                data,
                url: `http://80.211.189.66/api${endpoint}`
            })
        }
    }
};

export default callApi