import React from 'react'
import { Icon } from 'semantic-ui-react'

const BlogCard = (props) => {

    let {title, url, description} = props.info

    return (
        <div>
            <span class="text-secondary">{title}</span>  - {description}
        </div>
    )
}

export default BlogCard