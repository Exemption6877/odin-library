const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = Book.generateId();
  this.rendered = false;
}

Book.currentId = 1;

Book.generateId = function () {
  return Book.currentId++;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;

  const entry = new Book(title, author, pages, status);
  addBookToLibrary(entry);
  renderLibrary();
});

function renderLibrary(library = myLibrary) {
  const entriesBlock = document.querySelector(".entries");

  library.forEach((book) => {
    if (book.rendered == true) {
      return;
    } else {
      const entry = document.createElement("div");
      entry.classList.add(`entries-block`);
      entry.classList.add(`${book.id}`);
      const titleHTML = document.createElement("h3");
      titleHTML.innerText = book.title;
      entry.appendChild(titleHTML);
      const authorHTML = document.createElement("p");
      authorHTML.innerText = `By ${book.author}`;
      entry.appendChild(authorHTML);
      const pagesHTML = document.createElement("p");
      pagesHTML.innerText = `${book.pages} pages`;
      entry.appendChild(pagesHTML);
      const statusHTML = document.createElement("p");
      statusHTML.innerText = book.status;
      entry.appendChild(statusHTML);

      const buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("status");
      buttonsContainer.classList.add("container");
      const removeHTML = document.createElement("button");
      removeHTML.innerText = "Remove Entry";
      removeHTML.classList.add("remove-button");
      removeHTML.classList.add(`${book.id}`);
      removeHTML.addEventListener("click", () => {
        entriesBlock.removeChild(entry);
      });
      const readHTML = document.createElement("button");
      readHTML.classList.add("read-status");
      readHTML.innerText = "Change status";
      readHTML.addEventListener("click", () => {
        statusHTML.innerText == "Read"
          ? (book.status = "Not read")
          : (book.status = "Read");
        statusHTML.innerText = book.status;
      });
      buttonsContainer.appendChild(readHTML);
      buttonsContainer.appendChild(removeHTML);
      entry.appendChild(buttonsContainer);
      entriesBlock.appendChild(entry);
      book.rendered = true;
    }
  });
}

// Dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show-dialog");
const closeButton = document.querySelector("#close-dialog");
const submitButton = document.querySelector("#submit");

showButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", () => {
  dialog.close();
});
