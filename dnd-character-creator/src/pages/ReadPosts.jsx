import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} class={post.class} level={post.level} race={post.race} alignment={post.alignment}/>
                ) : <h2>{'No Characters Yet'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;