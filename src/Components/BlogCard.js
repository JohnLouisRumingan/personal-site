import React from 'react'
// import { Icon } from 'semantic-ui-react'

const BlogCard = (props) => {

    let {title, url, description} = props.info

    if(!title || !url || !description){
        throw Error('Blog missing title, url, or description')
    }

    return (
        <a href={url} onClick={(e) => {
            e.preventDefault();
            window.open(url);}}>
            <div>
                <span className="text-secondary">{title}</span>  - {description}
            </div>
        </a>
    )
}

export default BlogCard