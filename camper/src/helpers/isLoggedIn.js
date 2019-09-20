import axios from 'axios'

export const isLoggedIn = (e, history) =>{
   console.log(history)
    e.preventDefault();
    let email = document.getElementsByName('emailLogin')[0].value;
    let password = document.getElementsByName('pwLogin')[0].value;

    console.log('password', password , 'email', email)

   axios.get(`http://localhost:3001/api/user/${email}/${password}`)
    .then(function (response){
        console.log(response)
        console.log(history, "history")
       history.push("/saved");

        localStorage.setItem('id', response.data[0].id)
    }).catch(function(error){
        console.log(error)
    })

}

