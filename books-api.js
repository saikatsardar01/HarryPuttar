async function fetchBooks() {
            try {
                const response = await fetch("https://potterapi-fedeperin.vercel.app/en/books/");
                const books = await response.json();

                // Clear previous book cards if any
                document.getElementById("books-container").innerHTML = "";

                books.forEach(book => {
                    const bookCard = document.createElement("div");
                    bookCard.classList.add("book-card");

                    // Populate the card with book details
                    bookCard.innerHTML = `
                        <h2>${book.title}</h2>
                        <img src='${book.cover}'>
                        <p><strong>Release Date:</strong> ${book.releaseDate}</p>
                        <p><strong>Pages:</strong> ${book.pages}</p>
                        <p><strong>Description:</strong> ${book.description}</p>
                    `;

                    document.getElementById("books-container").appendChild(bookCard);
                });
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        }