import {React, useState} from 'react';
import { useParams, } from 'react-router-dom';
import { supabase } from '../client'

const Details = ({data}) => {
    const id2 = useParams().id;

    const post = data.filter(item => item.id == id2)[0];

    return (
        <div>
            <h2>Name: {post.title}</h2>
            <h3>Class: {post.class}</h3>
            <h3>Level: {post.level}</h3>
            <h3>Race: {post.race}</h3>
            <h3>Alignment: {post.alignment}</h3>
        </div>
    )
}

export default Details