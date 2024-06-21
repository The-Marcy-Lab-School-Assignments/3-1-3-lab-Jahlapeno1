export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = ""
  // books.forEach(book => {
  //   const li = document.createElement("li")
  //   const img = document.createElement("img")
  //   console.log(book.coverUl)
  //   img.setAttribute("src", "")
  // });
  // console.log(books)
  for (let i = 0; i < books.length; i++) {
    const li = document.createElement("li")
    const img = document.createElement("img")
    // console.log(books[i].coverUrl)
    img.setAttribute("src", books[i].coverUrl)
    img.setAttribute("alt", `An old cover of ${books[i].title}`)
    // console.log(img)
    const p = document.createElement("p")
    p.textContent = `Title: ${books[i].title}`
    const button = document.createElement("button")
    button.textContent = `View ${books[i].author.name}`
    button.setAttribute("data-author-url-key", books[i].author.urlKey)
    // console.log(button)
    li.append(img, p, button)
    // console.log(li)
    bookListEl.appendChild(li)
  };
  // console.log(bookListEl)
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = ""
  console.log(author)
  const h2 = document.createElement("h2")
  h2.textContent = author.name
  // console.log(h2)
  const img = document.createElement("img")
  img.src = author.pictureUrl
  img.alt = `A picture of ${author.name}`
  // console.log(img)
  const pTagBorn = document.createElement("p")
  pTagBorn.textContent = `Born: ${author.birthDate}`
  // console.log(pTagBorn)
  const pTagBio = document.createElement("p")
  pTagBio.textContent = author.bio
  // console.log(pTagBio)
  const a = document.createElement("a")
  a.href = author.wikipediaUrl
  a.textContent = "Wikipedia Link"
  // console.log(a)
  authorInfoEl.append(h2, img, pTagBorn, pTagBio, a)
}

export const renderNewUserForm = (newUserFormEl) => {
  newUserFormEl.innerHTML = `
    <label for='username'>Username</label>
    <input id='username' name='username'>
    <label for='is-cool'>Is this user cool?</label>
    <input id='is-cool' name='isCool' type='checkbox'>
    <label for='favorite-language'>Favorite Language</label>
    <select id='favorite-language' name='favoriteLanguage'>
        <option value='None'>None</option>
        <option value='JavaScript'>JavaScript</option>
        <option value='Python'>Python</option>
        <option value='Ruby'>Ruby</option>
    </select>
    <button>Create User</button>
    `;
    
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = ""
  const h2 = document.createElement("h2")
  h2.textContent = newUser.username
  h2.dataset.userId = newUser.id
  const pCool = document.createElement("p")
  pCool.textContent = newUser.isCool? "The hippest in the house!" : "A real square."
  const pFavLang = document.createElement("p")
  pFavLang.textContent = `Favorite Language: ${newUser.favoriteLanguage}`
  newUserEl.append(h2, pCool, pFavLang)
  console.log(h2.textContent)
}