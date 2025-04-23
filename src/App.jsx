import { useEffect, useState } from "react";
import PostPage from "./assets/PostPage";
import { GlobalContexProvider } from "./contex/GlobContex";

function App() {
  return (
    <>
      <GlobalContexProvider>
        <PostPage />
      </GlobalContexProvider>
    </>
  );
}

export default App;
