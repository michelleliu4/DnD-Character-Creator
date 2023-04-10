import { useState, React } from 'react';
import './CreatePost.css'
import { supabase } from '../client'


const CreatePost = () => {
    const [post, setPost] = useState({title: "", class: "", level: 0, race: "", alignment: ""});
    const createPost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Posts')
        .insert({title: post.title, class: post.class, level: post.level, race: post.race, alignment: post.alignment})
        .select();
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
            <form>
                <label for="title">Title</label> <br />
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
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost