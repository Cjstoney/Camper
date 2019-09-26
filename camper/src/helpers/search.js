import axios from 'axios'

export const searchTerm = (e) =>{
    e.preventDefault();
    let search = document.getElementById('search').value;

    console.log('search value', search);

    axios.get(`mysql://x60smffjgf3t4k1d:af7pfywc9p11tuqf@s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lif2wfoqiewjhmg3/api/resources/${search}`)
    .then(function (response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })

}