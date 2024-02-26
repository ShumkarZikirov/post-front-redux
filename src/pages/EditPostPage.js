import React, {useCallback,useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../utils/axios";

const EditPostPage = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [newImage, setNewImage] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const fetchPost  = useCallback(async () => {
        const {data} = await axios.get(`/posts/${params.id}`)
        setTitle(data.title)
        setText(data.text)
        setOldImage(data.imgUrl)
    },[params.id])

    const clearFormHandler = () => {
        setText('')
        setTitle('')
}
const submitFormHandler = () => {
  try {
      const updatedPost = new FormData()
  }catch (e) {
      console.log(e)
  }
}

    useEffect(() => {
        fetchPost()
    },[fetchPost])
    return(
        <form className={'w-1/3 mx-auto py-10'}
              onSubmit={e => e.preventDefault()}
        >
            <label className={'text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'}>
                Прикрепить изображение
                <input type="file" className={'hidden'}
                       onChange={e => {setNewImage(e.target.files[0])
                       setOldImage('')}}
                />
            </label>
            <div className={'flex object-cover py-2'}>
                {
                    oldImage && (
                        <img src={`http://localhost:4000/${oldImage}`} />
                    )}
                {
                    newImage && (
                        <img src={URL.createObjectURL(newImage)} />
                    )}
            </div>
            <label className={'text-xs text-white opacity-70'}>
                Заголовок поста
                <input type="text"
                       value={title}
                       onChange={e => setTitle(e.target.value)}
                       className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'}
                       placeholder={'Заголовок'}
                />
            </label>
            <label className={'text-xs text-white opacity-70'}>
                Текст поста
                <textarea type="text"
                          value={text}
                          onChange={e => setText(e.target.value)}
                          className={'mt-1 text-black resize-none h-40 w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'}
                          placeholder={'Текст поста'}
                />
            </label>
            <div className={'flex gap-8 items-center justify-center mt-4 '}>
                <button  className={'flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'}>Добавить</button>
                <button  className={'flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4'}>Отменить</button>
            </div>
        </form>
    )
}
export default EditPostPage