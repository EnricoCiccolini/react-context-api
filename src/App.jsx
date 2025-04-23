import { useEffect, useState } from "react"
import PostPage from "./assets/PostPage"
import GlobalContex from "./contex/GlobContex"








function App() {

  const [postList, setPostList] = useState([])

  function CalPost() {



    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setPostList(json))
  }


  useEffect(() => {
    CalPost()
  }, [])

  const GlobalProvaiderValue = { postList }
  return (
    <>
      <GlobalContex.Provider value={GlobalProvaiderValue}>
        <PostPage />
      </GlobalContex.Provider>
    </>
  )
}

export default App
