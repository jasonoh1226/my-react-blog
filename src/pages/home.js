import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {

    // 1 is the second element in the array of posts
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0: {
        // (row start) / ( column start) / (row end) / (column end)
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Jason Oh'
        post.description = '....'
    });
}

const recentPosts = [...trending, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop() // Pop the last post

export default function Home () {
    return (
      <main className="home">

        <section className="container">
          <div className="row">
          <h1>Featured Posts</h1>
            <section className="featured-posts-container">
              <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
              <MasonryPost post={lastFeatured} tagsOnTop={true} />
            </section>
          </div>
        </section>

        <section className="bg-white">
            <section className="container">
            <div className="row">
                <h1>Recent Posts</h1>
                <PostGrid posts={recentPosts}  />
            </div>
            </section>
        </section> 
       

        <section className="container">
          <div className="row">
            <h1>Trending Posts</h1>
            <PostMasonry posts={trending} columns={3} />
          </div>
        </section>
      </main>
    ); 
}