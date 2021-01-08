import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const List = () => {
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.list);

    const handleClick = (id)=>{
        dispatch({
            
                type: 'DELETE_ITEM',
                payload:id,
            
        });
    }
    if(!list || !list.length){
        return <p className="empty-list">No posts ..</p>
    }
    return(
        <div className="post">
            
            {
                
                list.map((l)=>(
                    <li className="list-item" key={l.id} >
                        <span>{l.label}</span>
                        <span className="delete-post" onClick={()=>handleClick(l.id)}>&times;</span>
                    </li>
                ))
            }
                
        </div>
    );
}
export default List;