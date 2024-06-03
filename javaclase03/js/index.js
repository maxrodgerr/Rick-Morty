fetch("https://rickandmortyapi.com/api/character")
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    let sec= document.querySelector(".characterlist")
    let characters='' 
   
    for (let i=0; i< data.results.length; i++) {
       
        characters +=`
       <article>
        <a href="./detalle.html?id=${data.results[i].id}">
        <img src="${data.results[i].image}"alt=''>'
        </a>
         <p>Name: ${data.results[i].name} </p>
         <p>Status: ${data.results[i].status}</p>
</article>`
}
    

sec.innerHTML = characters;

})

.catch(function(err){
    console.log(err);
})
