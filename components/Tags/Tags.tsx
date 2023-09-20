import React from 'react'
import Tagify, { TagifyBaseReactProps } from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import './index.css'

type Props = {} & TagifyBaseReactProps

const Tags = (props: Props) => {

    return (
        <Tagify
            className='tagify'
            {...props}
        />
    )
}

export default Tags