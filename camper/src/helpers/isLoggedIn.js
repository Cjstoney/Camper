import axios from 'axios'

export const isLoggedIn = (e, history) =>{
   console.log(history)
    e.preventDefault();
    let email = document.getElementsByName('emailLogin')[0].value;
    let password = document.getElementsByName('pwLogin')[0].value;

    console.log('password', password , 'email', email)

   axios.get(`s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/api/user/${email}/${password}`)
    .then(function (response){
        console.log(response)
        console.log(history, "history")
       history.push("/saved");

        localStorage.setItem('id', response.data[0].id)
    }).catch(function(error){
        console.log(error)
    })

}

