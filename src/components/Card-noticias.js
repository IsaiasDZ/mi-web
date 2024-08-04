import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

const Cardnoticias = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPge, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    console.log(posts)
    return (
    <div className='container-news'>
        
    </div>
  )
}

export default Cardnoticias