import './App.css';
import { useState, useEffect, React } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Details from './pages/Details'
import { Link } from 'react-router-dom'
import { supabase } from './client'

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true })

        // set state of posts
          setPosts(data);
    }
    fetchPosts();
  }, []);
  
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={posts}/>
    },
    {
      path: "/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path: "/new",
      element: <CreatePost />
    },
    {
      path: "/details/:id",
      element: <Details data={posts} />
    }
  ]);

  return ( 
    <div className="App">
      <div className="header">
        <h1>DnD Character Creator</h1>
        <Link to="/"><button className="headerBtn"> Explore Characters </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Character </button></Link>
      </div>
        {element}
    </div>
  );
}

export default App;
