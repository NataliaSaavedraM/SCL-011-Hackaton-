const actores = []
const lista= document.getElementById('peliculas');
//Actores
const actorsAvengers = () => {
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
        })
     .catch(error => error);
}

const movieActors = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Indiana-Jones&plot=full')
     .then(res => res.json())
     .then(movies => { 
        const actor= movies.Actors;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
             `
            <p>¿Quienes protagonizan la pelicula Indiana Jones? 
                <div> <img src= "${imageMovie}"> </div>
            <p><input type="radio"> Mel Gibson, Sean Connery, Denholm Elliott, Alison Doody<br>
            <input type="radio"> Richard Gere, Sean Connery, Denholm Elliott, Alison Doody<br>
            <input type="radio"> Jhon Travolta, Sean Connery, Denholm Elliott, Alison Doody<br>
            <input type="radio"> ${actor}
            </p>    
            `
        })
     .catch(error => error);
     }

const boton = document.getElementById('boton');
boton.addEventListener('click',() => {
     //actorsAvengers()
     //movieActress();
    //movieActors();
    //yearsAvengers();
    //yearsWizard();
    //yearsTitanic();
    countryAmelie();
    })
    
// Años de Estreno

const yearsAvengers = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=the-Avengers&plot=full')
     .then(res => res.json())
     .then(movies => { 
        const years= movies.Year;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
             `
            <p>¿En qué año se estrenó la pelicula The Avengers? 
                <div> <img src= "${imageMovie}"> </div>
            <p><input type="radio"> 1998<br>
            <input type="radio"> 2000 <br>
            <input type="radio"> ${years}<br>
            <input type="radio"> 1995
            </p>    
            `
        })
     .catch(error => error);
     }

const yearsWizard = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=the-Wizard-Of-Oz&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const years= movies.Year;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Cúal es el año de estreno de el Mago de Oz? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio"> ${years}<br>
                <input type="radio"> 2009<br>
                <input type="radio"> 2011<br>
                <input type="radio"> 2013
            </p>    
                `
     })
         .catch(error => error);
}


const yearsTitanic = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=titanic&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const years= movies.Year;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Qué año se estrenó Titanic? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio"> ${years}<br>
                <input type="radio"> 2009 <br>
                <input type="radio"> 2011<br>
                <input type="radio"> 2013
            </p>    
                `
     })
         .catch(error => error);
}
// Pais de origen
const countryAmelie = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Amélie&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const country= movies.Country;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿De qué nacionalidad es la pelicula Amélie? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio"> Italian<br>
                <input type="radio"> ${country} <br>
                <input type="radio"> USA <br>
                <input type="radio"> 
            </p>    
                `
    })
    .catch(error => error);
}

