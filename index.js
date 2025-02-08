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
  renderLibrary(myLibrary);
});

function renderLibrary(library) {
  const entriesBlock = document.querySelector(".entries");

  library.forEach((book) => {
    if (book.rendered == true) {
      return;
    } else {
      const entry = document.createElement("div");
      entry.classList.add(`entries-block`);
      const titleHTML = document.createElement("h3");
      titleHTML.innerText = book.title;
      entry.appendChild(titleHTML);
      const authorHTML = document.createElement("p");
      authorHTML.innerText = book.author;
      entry.appendChild(authorHTML);
      const pagesHTML = document.createElement("p");
      pagesHTML.innerText = book.pages;
      entry.appendChild(pagesHTML);
      const statusHTML = document.createElement("p");
      statusHTML.innerText = book.status;
      entry.appendChild(statusHTML);
      console.log(book.id);
      entriesBlock.appendChild(entry);
      book.rendered = true;
    }
  });
}

// Dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show-dialog");
const closeButton = document.querySelector("#close-dialog");

showButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
