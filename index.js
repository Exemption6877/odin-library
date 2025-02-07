const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(entry) {
  myLibrary.push(entry);
  console.log(myLibrary);
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
});

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
