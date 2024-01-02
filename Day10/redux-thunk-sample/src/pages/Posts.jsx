import React from 'react'
import { useSelector } from 'react-redux'
import { getPosts, getPostsStatus } from '../redux/postSlice'

const Posts = () => {
    const posts = useSelector(getPosts)
    const loaderx = useSelector(getPostsStatus)
    console.log(posts)
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
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Sample
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Posts