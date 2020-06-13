import React from 'react'

import {MasonryPost} from './'

export default function PostMasonry ({posts, columns, tagsOnTop}) {
    return (
        <section 
            className="masonry" 
            style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>

            {posts.map((post, index) => 
                // *** Shorthand for passing props into a component ***
                // If the variable name is already the name of the prop 
                // then you don't have to explicitly write.
                // You just destruct that object and then you pass the variables 
                // to it.
                <MasonryPost {...{post, index, tagsOnTop, key: index}} />
            )}
        </section>
    )
}