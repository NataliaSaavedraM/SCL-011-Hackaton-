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

 const movieActress = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=The-Devil-Wears-Prada&plot=full')
     .then(res => res.json())
     .then(movies => { 
        const actor= movies.Actors;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
             `
            <p>¿Quienes protagonizan la pelicula El diablo se Viste a la Moda? 
                <div> <img src= "${imageMovie}"> </div>
            <p><input type="radio"> Anne Hathaway, Emily Blunt, Stanley Tucci<br>
            <input type="radio"> Meryl Streep, Anne Hathaway, Emily Rose, Stanley Tucci<br>
            <input type="radio"> ${actor}<br>
            <input type="radio"> Meryl Streep, Anne Hathaway, Emily Blunt, Mark Ruffalo
            </p>    
            `
    
        //movies.Search.map(x => console.log(x.Title))   
        })
     .catch(error => error);
}

const movieActors = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Indiana-Jones&plot=full')
     .then(res => res.json())
     .then(movies => { 
        const actor= movies.Actors;
        const imageMovie= movies.Poster;
        console.log(movies)
            lista.innerHTML= 
             `
            <p>¿Quienes protagonizan la pelicula Indiana Jones? 
                <div> <img src= "${imageMovie}"> </div>
            <p><input type="radio"> Mel Gibson, Sean Connery, Denholm Elliott, Alison Doody"<br>
            <input type="radio"> Richard Gere, Sean Connery, Denholm Elliott, Alison Doody"<br>
            <input type="radio"> Jhon Travolta, Sean Connery, Denholm Elliott, Alison Doody" <br>
            <input type="radio"> ${actor}
            </p>    
            `
    
        //movies.Search.map(x => console.log(x.Title))   
        })
     .catch(error => error);
     }

 const boton = document.getElementById('boton');
 boton.addEventListener('click',() => {
    avengers()
    movieActress();
    movieActors();
})
