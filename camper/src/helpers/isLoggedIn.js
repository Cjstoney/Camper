export const isLoggedIn = () =>{
    const userId = localStorage.getItem('...')

    if(userId !== undefined){
        document.getElementsByid('savedButton').href='/saved'
       
    }else{
        document.getElementsByid('savedButton').href='/login'
        }
}

