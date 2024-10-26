async function fetchcharecter() {
    try {
        const response = await fetch("https://potterapi-fedeperin.vercel.app/en/characters/");
        const characters = await response.json();

        // Clear previous book cards if any
        document.getElementById("charecter-container").innerHTML = "";

        characters.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("charecter-card");

            // Populate the card with book details
            bookCard.innerHTML = `
                <h2>${book.fullName}</h2>
                <img src='${book.image}'>
                <p><strong>Birth Date:</strong> ${book.birthdate}</p>
                <p><strong>Hogwarts House:</strong> ${book.hogwartsHouse}</p>
                <p><strong>Interpreted By:</strong> ${book.interpretedBy}</p>
            `;

            document.getElementById("charecter-container").appendChild(bookCard);
        });
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}