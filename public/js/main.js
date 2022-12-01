window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  fetch("api/movies")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let data2 = data.data;
      data2.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        
        const h1 = document.createElement("h1");
        h1.textContent = movie.title;
    
        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;
    
        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        const boton = document.createElement("button");
        boton.innerHTML = `<a href='http://localhost:3001/movies/detail/${movie.id}'> Editar </a>`;
    
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
        card.appendChild(boton);
        
        
      });
    
    })
    .catch(function (error) {
      console.log(error)
    })



  // Codigo que debemos usar para mostrar los datos en el frontend
  

 
};
