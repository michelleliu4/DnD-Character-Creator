import {React, useState} from 'react';
import { useParams, } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

var changed = 0;
const EditPost = ({data}) => {
    const id2 = useParams().id;
    const [post, setPost] = useState({title: "", class: "", level: 0, race: "", alignment: ""});

    if ((data.length != 0) && (changed == 0)) {
        console.log(data.filter(item => item.id == id2)[0]);
        setPost(data.filter(item => item.id == id2)[0]);
        changed = 1; // prevent infinite loop
    }

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Posts')
        .update({title: post.title, class: post.class, level: post.level, race: post.race, alignment: post.alignment})
        .eq('id', id2);
        window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <h1></h1>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label for="class">Class</label><br />
                <input type="text" id="class" name="class" value={post.class} onChange={handleChange} /><br />
                <br/>

                <label for="level">Level</label><br />
                <input type="text" id="level" name="level" value={post.level} onChange={handleChange} /><br />
                <br/>

                <label for="race">Race</label><br />
                <input type="text" id="race" name="race" value={post.race} onChange={handleChange} /><br />
                <br/>

                <label for="alignment">Alignment</label><br />
                <input type="text" id="alignment" name="alignment" value={post.alignment} onChange={handleChange} /><br />
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost