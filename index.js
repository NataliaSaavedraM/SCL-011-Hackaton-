const actores = []
const lista= document.getElementById('peliculas');
//Actores
const avengers = () => {
fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=the-Avengers&plot=full')
 .then(res => res.json())
 .then(movies => { 
    const actor= movies.Actors;
    const imageMovie= movies.Poster;
    console.log(imageMovie)
        lista.innerHTML= 
         `
        <p>¿Quienes protagonizan la pelicula The Avengers? 
            <div> <img src= "${imageMovie}"> </div>
        <p><input type="radio">${actor}<br>
        <input type="radio">Robert Downey Jr., Chris Prat, Mark Ruffalo, Chris Hemsworth<br>
        <input type="radio">Robert Downey Jr., Chris Evans, Edward Norton, Chris Hemsworth<br>
        <input type="radio">Robert Downey Jr., Chris Pine, Mark Ruffalo, Chris Hemsworth </p>
        </p>
    
        `
        
    //movies.Search.map(x => console.log(x.Title))   
    })
 .catch(error => error);
 }

 const boton = document.getElementById('boton');
 boton.addEventListener('click',() => {
    avengers();
 })
