import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl)

  // Fetch the books!
  try {
    const books = await getFirstThreeFantasyBooks()
    // console.log(books)
    renderBookList(bookListEl, books)
    // render out the books

  
  } catch (error) {
    console.warn(error)
  }

  /*
  FEEDBACK:
  Since we already implemented the try and catch into the getFirstThreeFantasyBooks function,
  it is not necessary here
  */

  
  
  
  bookListEl.addEventListener("click", async (event) => {
    if (event.target.tagName === "BUTTON") {

      const authorId = event.target.getAttribute("data-author-url-key")

      const author = await getAuthor(authorId)

      return renderAuthorInfo(authorInfoEl, author)


    }
  })





  newUserFormEl.addEventListener('submit', async (event) => {
    event.preventDefault()
    const form = event.target
    
    const formData = new FormData(form)
    const formObject = Object.fromEntries(formData)

    console.log(formData)
    console.log(formObject)

    form.reset()
    const newUser = await createNewUser(formObject)

    renderNewUser(newUserEl, newUser)
    console.log(newUserEl.querySelector('h2').textContent)
  })
}
