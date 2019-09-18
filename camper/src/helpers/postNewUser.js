import axios from 'axios';

 export function newUser(){
    axios.post('http://localhost:3001/api/newuser', {
                name: '...',
                email: '...',
                password: '...'})
                  .then(function(response){
                  console.log(response)
                })
                .catch(function(error){
                  console.log(error)
                })
}

