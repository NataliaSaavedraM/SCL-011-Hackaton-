
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
        <p><input type="radio" value="correct">${actor}<br>
        <input type="radio" value="incorrect">Robert Downey Jr., Chris Prat, Mark Ruffalo, Chris Hemsworth<br>
        <input type="radio" value="incorrect">Robert Downey Jr., Chris Evans, Edward Norton, Chris Hemsworth<br>
        <input type="radio" value="incorrect">Robert Downey Jr., Chris Pine, Mark Ruffalo, Chris Hemsworth </p>
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
            <p><input type="radio" value="incorrect"> Anne Hathaway, Emily Blunt, Stanley Tucci<br>
            <input type="radio" value="incorrect"> Meryl Streep, Anne Hathaway, Emily Rose, Stanley Tucci<br>
            <input type="radio" value="correct"> ${actor}<br>
            <input type="radio" value="incorrect"> Meryl Streep, Anne Hathaway, Emily Blunt, Mark Ruffalo
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
            <p><input type="radio" value="incorrect"> Mel Gibson, Sean Connery, Denholm Elliott, Alison Doody<br>
            <input type="radio" value="incorrect"> Richard Gere, Sean Connery, Denholm Elliott, Alison Doody<br>
            <input type="radio" value="incorrect"> Jhon Travolta, Sean Connery, Denholm Elliott, Alison Doody<br>
            <input type="radio" value="correct"> ${actor}
            </p>    
            `
        })
     .catch(error => error);
     }

const section1 = document.getElementById('seccion1');
section1.addEventListener('click',() => {

    section2.style.display="block";
    section1.style.display="none";
     actorsAvengers()
     //movieActress();
    //movieActors();
    
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
            <p><input type="radio" value="incorrect"> 1998<br>
            <input type="radio" value="incorrect"> 2000 <br>
            <input type="radio" value="correct"> ${years}<br>
            <input type="radio" value="incorrect"> 1995
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
                <p><input type="radio" value="correct"> ${years}<br>
                <input type="radio" value="incorrect"> 2009<br>
                <input type="radio" value="incorrect"> 2011<br>
                <input type="radio" value="incorrect"> 2013
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
                <p><input type="radio" value="correct"> ${years}<br>
                <input type="radio" value="incorrect"> 2009 <br>
                <input type="radio" value="incorrect"> 2011<br>
                <input type="radio" value="incorrect"> 2013
            </p>    
                `
     })
         .catch(error => error);
}
const section2 = document.getElementById('seccion2');
section2.addEventListener('click',() => {
    section3.style.display="block";
    section2.style.display="none";
    //yearsAvengers();
    yearsWizard();
    //yearsTitanic();
    })
// Pais de origen
const countryAmelie = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Amélie&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const country= movies.Country;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿De qué nacionalidad es la pelicula Amélie? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Italian<br>
                <input type="radio" value="correct"> ${country} <br>
                <input type="radio" value="incorrect"> United States <br>
                <input type="radio" value="incorrect"> England
            </p>    
                `
    })
    .catch(error => error);
}
const countryTotoro = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=totoro&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const country= movies.Country;
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿De qué nacionalidad es la pelicula Mi vecino Totoro? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Spain<br>
                <input type="radio" value="incorrect"> Corea <br>
                <input type="radio" value="correct"> ${country} <br>
                <input type="radio" value="incorrect"> Philippines   
            </p>    
                `
    })
    .catch(error => error);
}
const countryOld = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=OldBoy&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const country= movies.Country;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿De qué nacionalidad es la pelicula OldBoy? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Chinesse<br>
                <input type="radio" value="incorrect"> Japan <br>
                <input type="radio" value="incorrect"> Taiwan <br>
                <input type="radio" value="correct"> ${country}  
            </p>    
                `
    })
    .catch(error => error);
}
const section3 = document.getElementById('seccion3');
section3.addEventListener('click',() => {
    section4.style.display="block";
    section3.style.display="none";
    countryAmelie();
    //countryTotoro();
    //countryOld();
    
    })
// Premiaciones
const awardsBatman = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Batman&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const awards= movies.Awards;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Cuantos premios y nominaciones tuvo Batman de Tim Burton? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="correct"> ${awards}<br>
                <input type="radio" value="incorrect"> Won 4 Oscar. Another 6 wins & 20 nominations. <br>
                <input type="radio" value="incorrect"> No nominations <br>
                <input type="radio" value="incorrect"> Won 1 Oscar
            </p>    
                `
    })
    .catch(error => error);
}

const awardsTitanic = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Titanic&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const awards= movies.Awards;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Cuantos premios y nominaciones tuvo Titanic? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio"> Won 2 Oscar<br>
                <input type="radio"> Won 4 Oscar. Another 6 wins & 20 nominations. <br>
                <input type="radio"> No nominations <br>
                <input type="radio"> ${awards}
            </p>    
                `
    })
    .catch(error => error);
}

const awardsLand = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=la-la-land&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const awards= movies.Awards;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Cuantos premios y nominaciones tuvo La la land? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Won 2 Oscar<br>
                <input type="radio" value="correct"> ${awards} <br>
                <input type="radio" value="incorrect"> No nominations <br>
                <input type="radio" value="incorrect"> Won 4 Oscar. Another 6 wins & 20 nominations
            </p>    
                `
    })
    .catch(error => error);
}

const section4 = document.getElementById('seccion4');
section4.addEventListener('click',() => {
    section5.style.display="block";
    section4.style.display="none";
    //awardsBatman();
    awardsTitanic()
    //awardsLand();
   
    })

// Guionistas
const writerPulp = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=pulp-fiction&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const writer= movies.Writer;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Quienes escribieron Pulp Fiction? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Jhon Travolta (stories), Roger Avary (stories)<br>
                <input type="radio" value="correct"> ${writer} <br>
                <input type="radio" value="incorrect"> Quentin Tarantino (stories), Uma Thurman <br>
                <input type="radio" value="incorrect"> Quentin Tarantino (stories), Roger Avary (stories), Samuel L.Jackson
            </p>    
                `
    })
    .catch(error => error);
}

const writerWolf = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=The-Wolf-of-Wall-Street&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const writer= movies.Writer;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Quienes escribieron El Lobo de Wall Street? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Leonardo Dicaprio<br>
                <input type="radio" value="correct"> ${writer} <br>
                <input type="radio" value="incorrect"> Jonah Hill<br>
                <input type="radio" value="incorrect"> Martin Scorsese
            </p>    
                `
    })
    .catch(error => error);
}
const writerInception = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Inception&plot=full')
    .then(res => res.json())
    .then(movies => { 
        const writer= movies.Writer;
        console.log(movies)
        const imageMovie= movies.Poster;
            lista.innerHTML= 
                 `
            <p>¿Quién escribió El origen? 
                <div> <img src= "${imageMovie}"></div>
                <p><input type="radio" value="incorrect"> Leonardo Dicaprio<br>
                <input type="radio" value="correct"> ${writer} <br>
                <input type="radio" value="incorrect"> Steven Spielberg <br>
                <input type="radio" value="incorrect"> Martin Scorsese
            </p>    
                `
    })
    .catch(error => error);
}

const section5 = document.getElementById('seccion5');
section5.addEventListener('click',() => {
    
    section5.style.display="none";
    //writerPulp();
    //writerWolf();
    writerInception();


   
    })