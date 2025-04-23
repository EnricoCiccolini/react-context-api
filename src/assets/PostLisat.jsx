import PostCard from "./PostCard"
import { useContext } from "react"
import GlobalContex from "../contex/GlobContex"

function PostList() {
    const { postList } = useContext(GlobalContex)

    return (
        <>
            {
                postList.map((ele) => <PostCard post={ele} key={ele.id} />)
            }

        </>
    )
}

export default PostList
