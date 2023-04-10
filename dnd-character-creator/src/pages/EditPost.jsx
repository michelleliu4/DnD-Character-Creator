import {React, useState} from 'react';
import { useParams, } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({data}) => {
    const id2 = useParams().id;

    const [post, setPost] = useState(data.filter(item => item.id == id2)[0]);
    // const post = data.filter(item => item.id == id2)[0];

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id2); 
        window.location = "/";
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
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br/>

                <label for="class">Class</label><br />
                <select id="class" name="class" value={post.class} onChange={handleChange}>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                </select>

                <label for="level">Level</label><br />
                <input type="text" id="level" name="level" value={post.level} onChange={handleChange} /><br/>

                <label for="race">Race</label><br />
                <select id="race" name="race" value={post.race} onChange={handleChange}>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Elf">Elf</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Half-Elf">Half-Elf</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Half-Orc">Half-Orc</option>
                    <option value="Human">Human</option>
                    <option value="Tiefling">Tiefling</option>
                </select><br />

                <label for="alignment">Alignment</label><br />
                <select id="alignment" name="alignment" value={post.alignment} onChange={handleChange}>
                    <option value="Lawful Good">Lawful Good</option>
                    <option value="Neutral Good">Neutral Good</option>
                    <option value="Chaotic Good">Chaotic Good</option>
                    <option value="Lawful Neutral">Lawful Neutral</option>
                    <option value="True Neutral">True Neutral</option>
                    <option value="Chaotic Neutral">Chaotic Neutral</option>
                    <option value="Lawful Evil">Lawful Evil</option>
                    <option value="Neutral Evil">Neutral Evil</option>
                    <option value="Chaotic Evil">Chaotic Evil</option>
                </select><br/>

                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost