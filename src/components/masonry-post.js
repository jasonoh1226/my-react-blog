import React from 'react'
import {TagRow} from './'

export default function MasonryPost ({post, tagsOnTop}) {

    const windowWidth = window.innerWidth
    const imageBackground = {backgroundImage: `url("${require(`../assets/images/${post.image}`)}")`}

    // It allows us to put content inside of the post image
    // and show it over the top of an overlay.
    const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground

    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
                {/* <div className="tags-container">
                    { post.categories.map((tag, index) => 
                        <span key={index} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                            {tag.toUpperCase()}
                        </span>
                    )}

                </div> */}
                <TagRow tags={post.categories} />
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
 
    )
}