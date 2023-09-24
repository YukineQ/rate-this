import React from "react"
import * as yup from 'yup'

import useUser from "@/lib/currentUser"
import { Button } from "@/components/Elements/Button"
import { Input } from "@/components/Elements/Input"
import { MultilineInput } from "@/components/Elements/Input/MultilineInput"
import { SkeletonLoader, SkeletonRectangle } from "@/components/Elements/Skeleton"
import { Form } from "@/components/Form"
import { UpdateProfileDTO, useUpdateProfile } from "../api/updateProfile"

//TODO: maybe move Header etc to page? Only form leave here
//TODO: subhead?
//TODO: yup object

const schema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    bio: yup.string().max(100)
})

export const ProfileUpdateForm = () => {
    const userQuery = useUser()
    const updateProfileMutation = useUpdateProfile()

    if (userQuery.isLoading) {
        return (
            <div className="space-y-10">
                <SkeletonLoader className="flex-col gap-2">
                    <SkeletonRectangle height={10} className="w-20" />
                    <SkeletonRectangle height={35} />
                    <SkeletonRectangle height={10} className="w-48" />
                </SkeletonLoader>
                <SkeletonLoader className="flex-col gap-2">
                    <SkeletonRectangle height={10} className="w-20" />
                    <SkeletonRectangle height={35} />
                    <SkeletonRectangle height={10} className="w-48" />
                </SkeletonLoader>
                <SkeletonLoader className="flex-col gap-2">
                    <SkeletonRectangle height={10} className="w-20" />
                    <SkeletonRectangle height={100} />
                    <SkeletonRectangle height={10} className="w-48" />
                </SkeletonLoader>
                <SkeletonLoader>
                    <SkeletonRectangle height={40} className="w-48" />
                </SkeletonLoader>
            </div>
        )
    }

    return (
        <Form<UpdateProfileDTO['data'], typeof schema>
            schema={schema}
            onSubmit={async (values) => {
                await updateProfileMutation.mutateAsync({ data: values })
            }}
            initialData={{
                name: userQuery.data?.name,
                email: userQuery.data?.email || '',
                bio: userQuery.data?.bio || '',
            }}
        >
            {({ register, formState }) => (
                <div className="space-y-8">
                    <Input
                        label="Username"
                        description="This is your public display name. It can be your real name or a pseudonym."
                        {...register('name')}
                    />
                    <Input
                        label="Email"
                        description="Right now this function unavalable."
                        disabled
                        {...register('email')}
                    />
                    <MultilineInput
                        label="Bio"
                        description="Tell us a little about yourself."
                        {...register('bio')}
                    />
                    <Button type="submit" className="w-48">Update profile</Button>
                </div>
            )}
        </Form>
    )
}