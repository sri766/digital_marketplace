"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


interface iAppProps {                                                                                                                                                                                                                                                                                                                                                                               
    email: string;
    name: string;
    userImage : string | undefined;
}
export default function UserNav({email,name,userImage}: iAppProps) {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={userImage} alt="userImage"/>
                        <AvatarFallback>
                            {name.slice(0,3)}
                        </AvatarFallback>
                    </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align="end" forceMount>
                <DropdownMenuLabel className='font-normal'>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{name}</p>
                        <p className="text-sm font-medium text-muted-foreground">{email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator/>

                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                           <LogoutLink>Logout</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}