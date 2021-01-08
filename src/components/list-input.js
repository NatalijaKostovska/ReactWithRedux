import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const Listinput = () => {
    const dispatch = useDispatch();
    const [newPost,setNewPost] = useState('');

    const handleChange = (event) =>{
        setNewPost(event.target.value);
    }
    const handleClick = () =>{
        dispatch({
            type:'LIST',
            payload:{
                label:newPost ,
                id:Date.now()
            },
            })
        setNewPost('')
    };

    return(
        <div className="form">
            <input
            value={newPost}
            onChange={handleChange}
            type="text"
            placeholder="Write a new post"
            className="post-input"
            />
            <button className="btn" onClick={handleClick}>Add new post</button>
        </div>
    );
};
export default Listinput;