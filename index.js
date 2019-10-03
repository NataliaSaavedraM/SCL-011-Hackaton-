const actores = []
const lista = document.getElementById('movies');
//Actores
const actorsAvengers = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=the-Avengers&plot=full')
        .then(res => res.json())
        .then(movies => {
            const actor = movies.Actors;
            const imageMovie = movies.Poster;
            console.log(imageMovie)
            lista.innerHTML =
                `
                
        <article>
         <header class="main-header container-fluid">
          <h3> ¿Quienes protagonizan la pelicula The Avengers?  </h3>
         </header>
         <div> <img src= "${imageMovie}"> </div>
         <p><input type="radio">${actor}<br>
         <div class="container-fluid>
         <input type="radio">Robert Downey Jr., Chris Prat, Mark Ruffalo, Chris Hemsworth<br>
         <input type="radio">Robert Downey Jr., Chris Evans, Edward Norton, Chris Hemsworth<br>
         <input type="radio">Robert Downey Jr., Chris Pine, Mark Ruffalo, Chris Hemsworth <br>
         </div>
        </article>    
        `

            //movies.Search.map(x => console.log(x.Title))   
        })
        .catch(error => error);
}

const movieActress = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=The-Devil-Wears-Prada&plot=full')
        .then(res => res.json())
        .then(movies => {
            const actor = movies.Actors;
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `
                
            <article> 
             <header class="main-header container-fluid">
              <h3> ¿Quienes protagonizan la pelicula El diablo se Viste a la Moda?  </h3>
             </header>
             <div> <img src= "${imageMovie}"> </div>

             <div class="container-fluid">
              <input type="radio"> Anne Hathaway, Emily Blunt, Stanley Tucci<br>
              <input type="radio"> Meryl Streep, Anne Hathaway, Emily Rose, Stanley Tucci<br>
              <input type="radio"> ${actor}<br>
              <input type="radio"> Meryl Streep, Anne Hathaway, Emily Blunt, Mark Ruffalo
            </div>
            </article>    
            `
        })
        .catch(error => error);
}

const movieActors = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Indiana-Jones&plot=full')
        .then(res => res.json())
        .then(movies => {
            const actor = movies.Actors;
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `
               
            <article
             <header class="main-header container-fluid">
              <h3> ¿Quienes protagonizan la pelicula Indiana Jones?  </h3>
             </header>
             <div> <img src= "${imageMovie}"> </div>
             <div class="container-fluid">
              <input type="radio"> Mel Gibson, Sean Connery, Denholm Elliott, Alison Doody<br>
              <input type="radio"> Richard Gere, Sean Connery, Denholm Elliott, Alison Doody<br>
              <input type="radio"> Jhon Travolta, Sean Connery, Denholm Elliott, Alison Doody<br>
              <input type="radio"> ${actor}
             </div>
            </article>    
            `
        })
        .catch(error => error);
}

const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
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
            const years = movies.Year;
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `
               
            <article>
             <header class="main-header container-fluid">
              <h3> ¿En qué año se estrenó la pelicula The Avengers?  </h3>
             </header>
             <div> <img src= "${imageMovie}"> </div>
             <div class="container-fluid">
              <input type="radio"> 1998<br>
              <input type="radio"> 2000 <br>
              <input type="radio"> ${years}<br>
              <input type="radio"> 1995
            </div>
            </article>    
            `
        })
        .catch(error => error);
}

const yearsWizard = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=the-Wizard-Of-Oz&plot=full')
        .then(res => res.json())
        .then(movies => {
            const years = movies.Year;
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `
             <article>
                    <header class="main-header container-fluid">
                        <h3> ¿Cúal es el año de estreno de el Mago de Oz?  </h3>
                    </header>
                    <div> <img src= "${imageMovie}"></div>
                    <div class="container-fluid">
                     <input type="radio"> ${years}<br>
                     <input type="radio"> 2009<br>
                     <input type="radio"> 2011<br>
                     <input type="radio"> 2013
                     </div>
                </article>    
                `
        })
        .catch(error => error);
}


const yearsTitanic = () => {
        fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=titanic&plot=full')
            .then(res => res.json())
            .then(movies => {
                const years = movies.Year;
                const imageMovie = movies.Poster;
                lista.innerHTML =
                    `
                   
            <article>
                 <header class="main-header container-fluid">
                    <h3> ¿Qué año se estrenó Titanic? </h3>
                </header>
                <div> <img src= "${imageMovie}"></div>

                <div class="container-fluid">
                 <input type="radio"> ${years}<br>
                 <input type="radio"> 2009 <br>
                 <input type="radio"> 2011<br>
                 <input type="radio"> 2013
                </div>
            </article>    
                `
            })
            .catch(error => error);
    }
    // Pais de origen
const countryAmelie = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Amélie&plot=full')
        .then(res => res.json())
        .then(movies => {
            const country = movies.Country;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `
                
            <article> 
                <header class="main-header container-fluid">
                    <h3> ¿De qué nacionalidad es la pelicula Amélie? </h3>
                </header>
                <div class="container-circle"> <img class="img-fluid" src= "${imageMovie}"></div>
                <div class="radio-container">
                 <input type="radio"> Italian<br>
                 <input type="radio"> ${country} <br>
                 <input type="radio"> USA <br>
                 <input type="radio"> 
                </div>
            </article>    
                `
        })
        .catch(error => error);
}