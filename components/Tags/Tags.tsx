import React from 'react'
import Tagify, { TagifyBaseReactProps } from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import './index.css'
import { InputWrapper, InputWrapperPassThroughProps } from '../Elements/Input'
import { TagData } from '@yaireo/tagify'

type TagsProps = InputWrapperPassThroughProps & TagifyBaseReactProps

const Tags = ({ label, description, error, ...props }: TagsProps) => {
    return (
        <InputWrapper label={label} description={description} error={error} isNative={false}>
            <Tagify
                className='tagify'
                settings={{                    
                    dropdown: { classname: 'custom_dropdown'}
                }}
                {...props}
            />
        </InputWrapper>
    )
}

export default Tags