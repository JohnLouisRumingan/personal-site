import React from 'react'
import { Icon } from 'semantic-ui-react'

const BlogCard = (props) => {

    let {title, url, description} = props.info

    return (
        <a href={url} onClick={(e) => {
            e.preventDefault();
            window.open(url);}}>
            <div>
                <span class="text-secondary">{title}</span>  - {description}
            </div>
        </a>
    )
}

export default BlogCard