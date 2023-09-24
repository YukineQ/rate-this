import { CldUploadWidget } from 'next-cloudinary';
import React, { useEffect, useState } from 'react'
import { Button } from '../Elements/Button';

type ImageUploadProps = {
    disabled?: boolean;
    onChange: (value: string) => void;
    value: string[];
}

export const ImageUpload = ({
    disabled,
    onChange,
    value,
}: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        return () => {
            setIsMounted(false)
        }
    }, [])

    const onUpload = (result: any) => {
        onChange(result.info.secure_url)
    }

    if (!isMounted) {
        return null
    }

    return (
        <div>
            <CldUploadWidget onUpload={onUpload} uploadPreset='wafgce76'>
                {({ open }) => {
                    const onClick = () => {
                        open()
                    }

                    return (
                        <Button
                            disabled={disabled}
                            variant='outline'
                            onClick={onClick}
                        >
                            Upload an Image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUpload