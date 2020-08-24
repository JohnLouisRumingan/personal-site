import React from 'react'
import { connect } from 'react-redux'
import BlogCard from '../Components/BlogCard'

const BlogContainer = (props) => {

    return (
        <main id="blog">
            <h1 className="lg-heading">
                Technical <span class="text-secondary">Blog</span>
            </h1>
            <h2 className="sm-heading">
                Tips and musings
            </h2>
            <div className="boxes">
                {props.blogs? props.blogs.map(blog => <BlogCard info={blog}/>) : null }
            </div>
        </main>
    )

}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogPosts
    }
}

export default connect(mapStateToProps)(BlogContainer)