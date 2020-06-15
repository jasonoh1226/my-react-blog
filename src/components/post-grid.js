import React , {useState, useMemo, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {TagRow} from './' 

export default function PostGrid({posts}) {

    const [pageSize, setPageSize] = useState(6)
    const [current, setCurrent] = useState(1)

    // useMemo()
    // - we don't want to update this every single time there's rerender
    //   only update it when a certain value changes.
    // - We only want to recalculate it whenever the page size changes 
    //   or the current page changes
    const paginatedPost = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts]) // DependencyList - when to update itself

    // useEffect()
    // - Without dependency, only execute when your component has been mounted.
    // - With dependency, execute every single time that those dependencies have
    //   been updated.
    //   Here, go up to the top of the pagination when go to the next page
    useEffect(() => {
        window.scroll({
            // top: 300,
            left: 0,
            behavior: 'smooth'
        })
    }, [current, pageSize]) // DependencyList - when to update itself

    return (
        <section className="grid-pagination-container">

            <section className="post-grid container">
                {paginatedPost.map((post, index) => (
                    <div className="post-container" key={index} >
                        <figure>
                            <Link to={post.link}>
                                <img src={require(`../assets/images/${post.image}`)} alt={post.image} />
                            </Link>
                        </figure>

                        <TagRow tags={post.categories}/>

                        <h2>{post.title}</h2>

                        <p className="author-text">
                            <span>
                                By:
                                <Link to={`/authors/${post.author}`}>
                                    {post.author}
                                </Link>
                            </span>
                            <span>
                                - {post.date}
                            </span>
                        </p>

                        <p className="description-text">
                            {post.description}
                        </p>
                        <Link to={post.link}>Read More...</Link>
                    </div>
                ))} 
            </section>

            <Pagination 
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>
    )
}