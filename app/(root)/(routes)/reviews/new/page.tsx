"use client"

import { ArrayPicker } from '@/components/Elements/ArrayPicker'
import { Button } from '@/components/Elements/Button'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/Elements/Header'
import { Image } from '@/components/Elements/Image'
import { Input } from '@/components/Elements/Input'
import { Select } from '@/components/Elements/Select'
import { Separator } from '@/components/Elements/Separator'
import { Form } from '@/components/Form'
import { ImageUpload } from '@/components/ImageUpload'
import { MDXEditor } from '@/components/MDXEditor'
import { FaTrashCan } from 'react-icons/fa6'
import React from 'react'
import { Controller } from 'react-hook-form'
import * as yup from 'yup'
import Tags from '@/components/Tags/Tags'

const schema = yup.object({
    title: yup.string().min(10).required(),
    creation: yup.string().required(),
    content: yup.string().min(100).required(),
    rate: yup.number().max(10).min(1).required(),
    images: yup.array(),
    tags: yup.array().required(),
})

type ReviewData = {
    title: string;
    content: string;
    creation: string;
    rate: string;
    images: string[];
    tags: string[];
}

export default function NewReview() {
    const rate = Array.from({ length: 10 }, (_, i) => i + 1)

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>New Review</PageHeaderHeading>
                <PageHeaderDescription>
                    Here you can write your opinion about some kind of creation.
                </PageHeaderDescription>
            </PageHeader>
            <Separator />
            <div className="pt-4">
                <Form<ReviewData, typeof schema>
                    schema={schema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    initialData={{
                        images: [],
                        tags: [],
                    }}
                >
                    {({ register, formState, control }) => (
                        <div className='space-y-8'>
                            <Input {...register('title')} label='Title' description='This is review display title.' />
                            <Input {...register('title')} label='Creation' description='Title of the work being reviewed.' />
                            <Controller
                                control={control}
                                name='content'
                                render={({ field: { onChange, value = '' } }) => (
                                    <MDXEditor
                                        markdown={value}
                                        onChange={onChange}
                                        placeholder='Write your opinion here...'
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name='rate'
                                render={({ field: { onChange, value } }) => (
                                    <ArrayPicker
                                        label='Rate'
                                        description='Rate how much you liked the creation.'
                                        options={rate}
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            <Select
                                label='Category'
                                description='Select category of reviewed creation.'
                                options={['movie', 'cartoon']}
                            />
                            <Controller
                                control={control}
                                name='images'
                                render={({ field }) => (
                                    <>
                                        <div className='flex items-center gap-4 flex-wrap'>
                                            {field.value.map((url) => (
                                                <Image key={url} src={url} alt='Uploaded image.'>
                                                    <div className='z-10 absolute top-2 right-2'>
                                                        <Button
                                                            onClick={() => field.onChange(
                                                                field.value.filter(o => o !== url)
                                                            )}
                                                            variant='danger'
                                                            size='icon'
                                                            startIcon={<FaTrashCan size={18} />}
                                                        />
                                                    </div>
                                                </Image>
                                            ))}
                                        </div>
                                        <ImageUpload
                                            value={field.value.map((url) => url)}
                                            onChange={(url) => field.onChange(field.value.concat(url))}
                                        />
                                    </>
                                )}
                            />
                            <Controller
                                control={control}
                                name='tags'
                                render={({ field }) => (
                                    <Tags onAdd={(e) => field.onChange(e.detail.tagify.value)}/>
                                )}
                            />

                            <Button type='submit'>Post</Button>
                        </div>
                    )}
                </Form>
            </div>
        </>
    )
}
