
import {AiFillEye,AiOutlineMessage} from 'react-icons/ai'
import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
const PostItem = ({post}) => {
    if(!post){
        return (
            <div className={'text-xl text-center text-white py-10'}>
                Постов нет
            </div>
        )
    }
  return(
     <Link to={`/${post._id}`}>
         <div className={'flex  flex-col basis-1/4 flex-grow'}>
             <div className={post.imgUrl? 'flex rounded-sm h-80': 'flex rounded-sm'}>
                 {
                     post.imgUrl && (
                         <img src={`http://localhost:4000/${post.imgUrl}`} alt={post.imgUrl.name} className={'object-cover w-full'}/>
                     )
                 }
             </div>
             <div className={'flex flex-col relative justify-between items-start pt-2'}>
                 <div className={'text-sm text-white opacity-50'}>
                     {post.username}
                 </div>
                 <div className={'text-xs text-white absolute right-0  opacity-50'}>
                     <Moment date={post.createdAt} format={'D MMM YYYY'}/>
                 </div>
                 <div className={'text-white text-xl'}>{post.title}</div>
                 <p className={'text-white opacity-60 text-xs pt-4'}>{post.text}</p>
                 <div className={'flex gap-3 pt-2 items-center'}>
                     <button className={'flex items-center justify-center gap-2 text-xs text-white opacity-50'}>
                         <AiFillEye/> <span>{post.views}</span>
                     </button>
                     <button className={'flex items-center justify-center gap-2 text-xs text-white opacity-50'}>
                         <AiOutlineMessage/> <span>{post.comments?.length || 0}</span>
                     </button>
                 </div>
             </div>
         </div>
     </Link>
  )
}
export default PostItem