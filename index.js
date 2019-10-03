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
         <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"></div> 
         <div class="radio-container">
         <input type="radio">${actor}<br>
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

    

const section1 = document.getElementById('seccion1');
section1.addEventListener('click', () => {

        section2.style.display = "block";
        section1.style.display = "none";
        actorsAvengers()
            //movieActress();
            //movieActors();

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
             <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"></div> 
             <div class="radio-container"> 
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
                    <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"></div> 
                    <div class="radio-container"> 
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
                <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"></div> 
                <div class="radio-container"> 
                 <input type="radio" value="correct"> ${years}<br>
                 <input type="radio" value="incorrect"> 2009 <br>
                 <input type="radio" value="incorrect"> 2011<br>
                 <input type="radio" value="incorrect"> 2013
                </div>
            </article>    
                `
        })
        .catch(error => error);
}



const section2 = document.getElementById('seccion2');
section2.addEventListener('click', () => {
        section3.style.display = "block";
        section2.style.display = "none";
        //yearsAvengers();
        yearsWizard();
        //yearsTitanic();
    })
    // Pais de origen
const countryAmelie = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Amélie&plot=full')
        .then(res => res.json())
        .then(movies => {
            const country = movies.Country;
            const imageMovie = movies.Poster;
            lista.innerHTML =

                `<article>
                    <header  class="main-header container-fluid">
                    <h3>  ¿De qué nacionalidad es la pelicula Amélie ? </h3>
                    </header>
                <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"></div> 
                <div class="radio-container"> 
                    <input type ="radio" value= "incorrect"> Italian <br>
                    <input type = "radio" value = "correct" > ${country} <br>
                    <input type = "radio" value = "incorrect"> United States <br>
                    <input type = "radio" value = "incorrect" > England 
                </div>
            </article>`
        })
        .catch(error => error);
}
const countryTotoro = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=totoro&plot=full')
        .then(res => res.json())
        .then(movies => {
            const country = movies.Country;
            const imageMovie = movies.Poster;
            lista.innerHTML =
                ` <article>
                    <header class="main-header container-fluid">
                    ¿De qué nacionalidad es la pelicula Mi vecino Totoro ?
                    </header>
                    <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"> </div> 
                    <div class="radio-container">
                    <input type = "radio" value = "incorrect" > Spain <br>
                    <input type = "radio" value = "incorrect" > Corea <br>
                    <input type = "radio" value = "correct" > ${country} <br>
                    <input type = "radio" value = "incorrect" > Philippines  
                    </div>  
              </article>`
        })
        .catch(error => error);
}
const countryOld = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=OldBoy&plot=full')
        .then(res => res.json())
        .then(movies => {
            const country = movies.Country;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                ` <article>
                    <header  class="main-header container-fluid">
                    <h3>¿De qué nacionalidad es la pelicula OldBoy?</h3>
                    </header>
                    <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"> </div>
                    <div class="radio-container">
                    <input type = "radio" value = "incorrect"> Chinesse < br >
                    <input type = "radio" value = "incorrect" > Japan < br >
                    <input type = "radio" value = "incorrect" > Taiwan < br >
                    <input type = "radio" value = "correct" > ${country} 
                    </div> 
                 </article>
`
        })
        .catch(error => error);
}
const section3 = document.getElementById('seccion3');
section3.addEventListener('click', () => {
        section4.style.display = "block";
        section3.style.display = "none";
        countryAmelie();
        //countryTotoro();
        //countryOld();

    })
    // Premiaciones
const awardsBatman = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Batman&plot=full')
        .then(res => res.json())
        .then(movies => {
            const awards = movies.Awards;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `<article>
                <header class="main-header container-fluid">
                 <h3>¿Cuantos premios y nominaciones tuvo Batman de Tim Burton ?</h3>
                </header>
               <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"></div> 
               <div  class="radio-container">
                <input type = "radio" value = "correct"> ${awards} <br>
                <input type = "radio" value = "incorrect"> Won 4 Oscar.Another 6 wins & 20 nominations. <br>
                <input type = "radio"value = "incorrect"> No nominations <br>
                <input type = "radio"value = "incorrect"> Won 1 Oscar 
               </div> 
`
        })
        .catch(error => error);
}

const awardsTitanic = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Titanic&plot=full')
        .then(res => res.json())
        .then(movies => {
            const awards = movies.Awards;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                `           <article>
                    <header class="main-header container-fluid">
                     <h3>¿Cuantos premios y nominaciones tuvo Titanic?</h3>
                    </header>
                    <div class="container-circle" ><img class="img-fluid" src ="${imageMovie}"> </div> 
                    <div class="radio-container">
                     <input type= "radio"> Won 2 Oscar <br>
                     <input type= "radio"> Won 4 Oscar.Another 6 wins & 20 nominations. <br>
                     <input type= "radio"> No nominations <br>
                     <input type= "radio"> ${awards}
                    </div>
            <article>  
`
        })
        .catch(error => error);
}

const awardsLand = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=la-la-land&plot=full')
        .then(res => res.json())
        .then(movies => {
            const awards = movies.Awards;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                ` <article>
                <header  class="main-header container-fluid">
                    <h3>¿Cuantos premios y nominaciones tuvo La la land? </h3>
                </header>
                <div class="container-circle"> <img class="img-fluid" src ="${imageMovie}"> </div>
                <div class="radio-container">
                 <input type="radio"value ="incorrect" > Won 2 Oscar <br>
                 <input type="radio" value ="correct" > ${awards } <br>
                 <input type="radio"value ="incorrect" > No nominations <br>
                 <input type="radio" value ="incorrect"> Won 4 Oscar.Another 6 wins & 20 nominations
                </div> 
                </article>  
`
        })
        .catch(error => error);
}

const section4 = document.getElementById('seccion4');
section4.addEventListener('click', () => {
    section5.style.display = "block";
    section4.style.display = "none";
    //awardsBatman();
    awardsTitanic()
        //awardsLand();

})

// Guionistas
const writerPulp = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=pulp-fiction&plot=full')
        .then(res => res.json())
        .then(movies => {
            const writer = movies.Writer;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                ` <article>
                    <header  class="main-header container-fluid">
                    <h3>¿Quienes escribieron Pulp Fiction?</h3>
                    </header>
                   <div  class="container-circle"> <img class="img-fluid" src ="${imageMovie}"></div> 
                   <div class="radio-container">
                    <input type = "radio" value = "incorrect" > Jhon Travolta(stories), Roger Avary(stories) <br>
                    <input type = "radio" value = "correct"> ${writer} <br>
                    <input type = "radio" value = "incorrect" > Quentin Tarantino(stories), Uma Thurman <br>
                    <input type = "radio" value = "incorrect" > Quentin Tarantino(stories), Roger Avary(stories), Samuel L.Jackson 
                  </div>   
                <article> 
`
        })
        .catch(error => error);
}

const writerWolf = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=The-Wolf-of-Wall-Street&plot=full')
        .then(res => res.json())
        .then(movies => {
            const writer = movies.Writer;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                ` <article> 
                   <header  class="main-header container-fluid">
                    ¿Quienes escribieron El Lobo de Wall Street ?
                   </header>
                  <div class="container-circle"> <img class="img-fluid" src="${imageMovie}"> </div> 
                <div class="radio-container">
                    <input type = "radio" value = "incorrect" > Leonardo Dicaprio <br>
                    <input type = "radio" value = "correct" > ${writer} <br>
                    <input type = "radio" value = "incorrect" > Jonah Hill <br>
                    <input type = "radio" value = "incorrect" > Martin Scorsese 
                </div>   
`
        })
        .catch(error => error);
}
const writerInception = () => {
    fetch('http://www.omdbapi.com/?apikey=3a4ab00&t=Inception&plot=full')
        .then(res => res.json())
        .then(movies => {
            const writer = movies.Writer;
            console.log(movies)
            const imageMovie = movies.Poster;
            lista.innerHTML =
                ` <article>
                        <header class="main-header container-fluid">
                        ¿Quién escribió El origen ?
                        </header>
                        <div  class="container-circle"> < img class="img-fluid" src = "${imageMovie}" > </div>
                        <div class="radio-container">
                            <input type = "radio" value = "incorrect" > Leonardo Dicaprio <br>
                            <input type = "radio"value = "correct" > ${writer } <br>
                            <input type = "radio" value = "incorrect" > Steven Spielberg <br>
                            <input type = "radio" value = "incorrect" > Martin Scorsese 
                        </div> 
                </article>  
`
        })
        .catch(error => error);
}

const section5 = document.getElementById('seccion5');
section5.addEventListener('click', () => {

    section5.style.display = "none";
    writerPulp();
    //writerWolf();
    //writerInception();



})