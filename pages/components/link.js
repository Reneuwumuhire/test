import React from 'react'

function links(props) {
    const { link } = props;
    return (
        <div>
            <div>
                {link.description} ({link.url})
      </div>
        </div>
    )
}

export default links;
