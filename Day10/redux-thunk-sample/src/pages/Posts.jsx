import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPosts, getPostsStatus } from '../redux/postSlice';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import axios from 'axios';
const Posts = () => {

    // const [posts, setPosts] = useState([])

    // const fetchPosts = async () => {
    //     const res = await axios.get("http://localhost:8081/posts")
    //     console.log(res.data)
    //     console.log('ref')
    //     setPosts(res.data)
    // }
    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    const postsx = useSelector(getPosts)
    const loaderx = useSelector(getPostsStatus)
    console.log(postsx, loaderx)
    return (
        <div>
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <table className='data-table'>
                        <thead>
                            <tr>
                                <td>
                                    Id
                                </td>
                                <td>
                                    Title
                                </td>
                            </tr>
                        </thead>

                        <tbody>
                            {loaderx ? 
                            <>
                            <tr>
                                <td colSpan={2} rowSpan={2}>
                                    Loading !!
                                </td>
                            </tr>
                            </>
                            :

                                postsx.map((post) => (
                                    <tr key={post.id}>
                                        <td>
                                            {post.id}
                                        </td>
                                        <td>
                                            {post.title}
                                        </td>
                                    </tr>
                                ))
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Posts;
