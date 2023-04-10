import {React, useState} from 'react';
import { useParams, } from 'react-router-dom';
import { supabase } from '../client'

var changed = 0;
const Details = ({data}) => {
    const id2 = useParams().id;
    const [post, setPost] = useState({title: "", class: "", level: 0, race: "", alignment: ""});
    // const post = data.filter(item => item.id == id2)[0];
    if ((data.length != 0) && (changed == 0)) {
        console.log(data.filter(item => item.id == id2)[0]);
        setPost(data.filter(item => item.id == id2)[0]);
        changed = 1; // prevent infinite loop
    }
    console.log(post);

    return (
        <div>
            <h1>yuh</h1>
            <h1>{post.title}</h1>
        </div>
    )
}

export default Details