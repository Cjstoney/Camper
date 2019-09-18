import axios from 'axios';

 function newuser(){
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

export default newuser();