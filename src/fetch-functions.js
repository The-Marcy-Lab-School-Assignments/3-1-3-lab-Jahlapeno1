// an async/await function returns a promise

export const getFirstThreeFantasyBooks = async () => {
  try {
    const response = await fetch(`https://openlibrary.org/subjects/fantasy.json`)
    if (!response.ok) {
      throw new Error("Failed to get fantasy books.")
    }
    const bookData = await response.json()
    const firstThreeBooks = []
    for (let i = 0; i < 3; i++) {
      const currWork = bookData.works[i]
      const currCoverId = currWork.cover_id

      const book = {
        title: currWork.title,
        author: {
          name: currWork.authors[0].name,
          urlKey: currWork.authors[0].key
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${currCoverId}-M.jpg`
      }
      firstThreeBooks.push(book)
    }
    // console.log(firstThreeBooks)
    return firstThreeBooks

  } catch (error) {
    console.warn(error)
    return null
  }
};

export const getAuthor = async (urlKey) => {
  try {
    const url = `https://openlibrary.org${urlKey}.json`
    const response = await fetch(url)
    // console.log(response)
    if(!response.ok) {
      throw new Error("Failed to get author")
    }
    const authorData = await response.json()
    // console.log(authorData.photos[0])
    const authorObj = {
      birthDate: authorData.birth_date,
      bio: authorData.bio,
      wikipediaUrl: authorData.wikipedia,
      name: authorData.name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${authorData.photos[0]}-M.jpg`
    }
    // console.log(authorObj)
    return authorObj
  } catch (error) {
    console.warn(error)
    return null
  }
};

export const createNewUser = async (userObj) => {
  try {
    const postOption = {
      method: "POST",                      // The type of HTTP request
      body: JSON.stringify(userObj),       // The data to be sent to the API
      headers: {
        "Content-Type": "application/json" // The format of the body's data
      }  
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, postOption)
    if (!response.ok) {
      throw new Error("Failed to create new user")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.warn(error)
    return null
  }
}