import React from 'react'
import Tagify, { TagifyBaseReactProps } from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import './index.css'
import { InputWrapper, InputWrapperPassThroughProps } from '../Elements/Input'

type TagsProps = InputWrapperPassThroughProps & TagifyBaseReactProps

const Tags = ({ label, description, error, ...props }: TagsProps) => {
    return (
        <InputWrapper label={label} description={description} error={error} isNative={false}>
            <Tagify
                className='tagify'
                {...props}
            />
        </InputWrapper>
    )
}

export default Tags