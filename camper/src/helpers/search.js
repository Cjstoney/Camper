import axios from 'axios'

export const searchTerm = (e) =>{
    e.preventDefault();
    let search = document.getElementById('search').value;

    console.log('search value', search);

    axios.get(`http://localhost:3001/api/resources/${search}`)
    .then(function (response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })

}