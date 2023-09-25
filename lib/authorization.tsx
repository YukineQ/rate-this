import { User, Comment } from "@prisma/client";
import useUser from "./currentUser";
import React from "react";

export const POLICIES = {
    'comment:delete': (user: User, comment: Comment) => {
        if (user === undefined) {
            return false
        }

        if (user.isAdmin) {
            return true
        }

        if (!user.isAdmin && user.id === comment.userId) {
            return true
        }

        return false
    }
}

export const useAuthorization = () => {
    const userQuery = useUser()

    const checkAccess = React.useCallback(
        ({ adminAccess }: { adminAccess: boolean }) => {
            if (!userQuery.data) {
                return false
            }

            if (adminAccess) {
                return userQuery.data.isAdmin
            }

            return true
        },
        [userQuery.data?.isAdmin]
    )

    return { checkAccess }
}

type AuthorizationProps = {
    forbiddenFallback?: React.ReactNode;
    children: React.ReactNode;
} & (
        | {
            adminAccess: boolean;
            policyCheck?: never;
        }
        | {
            adminAccess?: never;
            policyCheck: boolean;
        }
    )

export const Authorization = ({
    policyCheck,
    adminAccess,
    forbiddenFallback = null,
    children,
}: AuthorizationProps) => {
    const { checkAccess } = useAuthorization();

    let canAccess = false;

    if (adminAccess) {
        canAccess = checkAccess({ adminAccess });
    }

    if (typeof policyCheck !== 'undefined') {
        canAccess = policyCheck;
    }

    return <>{canAccess ? children : forbiddenFallback}</>;
};
