"use client"

import { Button } from "@/components/Elements/Button"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/Elements/Header"
import { Separator } from "@/components/Elements/Separator"
import { ProfileUpdateForm } from "@/features/users"

const SettingsPage = () => {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Profile</PageHeaderHeading>
                <PageHeaderDescription>
                    This is how others will see you on the site.
                </PageHeaderDescription>
            </PageHeader>
            <Separator />
            <div className="pt-4">
                <ProfileUpdateForm />
            </div>
            <div className="mt-10 space-y-6">
                <PageHeader className="text-red-500">
                    <PageHeaderHeading>Delete Account</PageHeaderHeading>
                    <PageHeaderDescription>
                        Once you delete your account, there is no going back. Please be certain.
                    </PageHeaderDescription>
                </PageHeader>
                <Separator />
                <Button className="w-48" variant='danger'>Delete account</Button>
            </div>
        </>
    )
}

export default SettingsPage