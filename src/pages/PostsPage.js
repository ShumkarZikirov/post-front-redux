import axios from "../utils/axios";
import {useState,useEffect} from "react";
import PostItem from "../components/PostItem";


const PostsPage = () => {
    const [post,setPost] = useState([])
    const fetchMyPosts = async () => {
        try {
            const {data} = await axios.get('/posts/user/me')
            setPost(data)
        }catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchMyPosts()
    }, []);
  return(
      <div className={'w-1/2 mx-auto py-10 flex flex-col gap-10'}>
          {
              post?.map((posts,id) => <PostItem post={posts} key={id}/>)
          }
      </div>
  )
}
export default PostsPage