import axios from 'axios';

 export function newUser(history){
     console.log('running')
let name = document.getElementsByName('fullName')[0].value;
let email = document.getElementsByName('email')[0].value;
let password = document.getElementsByName('password')[0].value;
console.log('password', password, 'email', email, 'name', name)

    axios.post('s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/api/newuser', {
                name: name,
                email: email,
                password: password
            })
                  .then(function(response){
                  console.log(response)
                  history.push("/login");

                })
                .catch(function(error){
                  console.log(error)
                })
}

