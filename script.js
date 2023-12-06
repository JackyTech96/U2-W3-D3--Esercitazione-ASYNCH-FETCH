fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => {
    if (responseObj.ok) {
      return responseObj.json();
    }
    throw new Error("Errore nella risposta del server");
  })
  .then((booksObj) => {
    const row = document.querySelector(".row");

    booksObj.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("col");
      card.classList.add("mb-3");
      card.id = book.asin; // Imposta l'ID della card come l'asin del libro
      card.innerHTML = `
          <div class="card h-100">
            <img src="${book.img}" class="img-fluid" alt="${book.title}" style="height: 350px">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Price: $${book.price}</p>
              <button class="btn btn-success" onclick="purchaseBook('${book.asin}')">Compra</button>
              <button class="btn btn-danger" onclick="deleteBook('${book.asin}')">Scarta</button>
            </div>
          </div>
        `;
      row.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Errore durante il recupero dei dati:", error);
  });
// const cart = [];
// let booksObj;

const deleteBook = (id) => {
  const cardToRemove = document.getElementById(id);
  cardToRemove.remove();
};

// const updateCartCount = () => {
//   const cartCount = document.getElementById("cartCount");
//   cartCount.textContent = cart.length;
// };

// const showCart = () => {
//   console.log("Contenuto del carrello:", cart);
// };

// const purchaseBook = (id, books) => {
//   const selectedBook = books.find((book) => book.asin === id);
//   cart.push(selectedBook);
//   console.log("Libro aggiunto al carrello:", selectedBook);
//   updateCartCount();
// };
