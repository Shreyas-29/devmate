"use client";

import Link from "next/link";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/DropdownMenu";
import { KindeUser, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

interface UserAccountNavProps {
    user: KindeUser;
}

const UserAccountNav: FC<UserAccountNavProps> = ({
    user
}) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md">
                <UserAvatar
                    user={user}
                    className="h-9 w-9"
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg justify-normal">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user?.family_name &&
                            <p className="font-medium capitalize">
                                {user.family_name}
                            </p>
                        }
                        {user?.email &&
                            <p className="w-48 text-sm truncate text-primary">
                                {user.email}
                            </p>
                        }
                    </div>
                </div>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/dashboard" className="flex items-start">
                        <Image src="/icons/dashboard.svg" alt="Dashboard" width={50} height={50} className="object-cover w-4 h-4 mr-2" />
                        Dashboard
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/problems/all" className="flex items-start">
                        <Image src="/icons/problem.svg" alt="Problem" width={50} height={50} className="object-cover w-4 h-4 mr-2" />
                        Problems
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/dashboard/leaderboard" className="flex items-start">
                        <Image src="/icons/leaderboard.svg" alt="Leaderboard" width={50} height={50} className="object-cover w-4 h-4 mr-2" />
                        Leaderboard
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/dashboard/settings" className="flex items-start">
                        <Image src="/icons/settings.svg" alt="Settings" width={50} height={50} className="object-cover w-4 h-4 mr-2" />
                        Settings
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild className="cursor-pointer">
                    <LogoutLink className="flex items-start cursor-pointer">
                        <Image src="/icons/logout.svg" alt="Signout" width={50} height={50} className="object-cover w-4 h-4 mr-2" />
                        Sign Out
                    </LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserAccountNav;