import { AvatarProps } from "@radix-ui/react-avatar";
import Image from "next/image";
import { FC } from "react";
import { Icons } from "./Icons";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";

interface UserAvatarProps extends AvatarProps {
    user: KindeUser;
}

const UserAvatar: FC<UserAvatarProps> = ({
    user, ...props
}) => {
    return (
        <Avatar {...props} className="rounded-md">
            {user?.picture ? (
                <div className="relative w-full h-full border rounded-md border-muted">
                    <Image
                        src={user?.picture!}
                        alt="User"
                        referrerPolicy="no-referrer"
                        fill
                        sizes="100%"
                        className="rounded-md"
                    />
                </div>
            ) : (
                <AvatarFallback className="border !rounded-md border-slate-700">
                    <span className="sr-only">
                        {user?.family_name}
                    </span>
                    <Image
                        src="/icons/user.svg"
                        alt="User"
                        width={50}
                        height={50}
                        className="object-cover w-5 h-5"
                    />
                </AvatarFallback>
            )}
        </Avatar>
    );
}

export default UserAvatar;