import axios from 'axios'

export const isLoggedIn = (e) =>{
    e.preventDefault();
    let email = document.getElementsByName('emailLogin')[0].value;
    let password = document.getElementsByName('pwLogin')[0].value;

    console.log('password', password , 'email', email)

    axios.get('http://localhost:3001/api/user', {
    params:{
        email: email,
        password: password
    }
    }).then(function (response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })


    // const userId = localStorage.getItem('...')

    // if(userId !== undefined){
    //     document.getElementsByid('savedButton').href='/saved'
       
    // }else{
    //     document.getElementsByid('savedButton').href='/login'
    //     }
}

