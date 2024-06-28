import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

export async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <div className="relative max-w-7xl w-full flex items-center justify-between px-4 md:px-8 mx-auto py-7">
            <div className="flex items-center">
                <Link href='/' className="text-xl md:text-2xl lg:text-4xl font-bold">
                    Design<span className="text-gradient">Hive</span>
                </Link>
            </div>
            <NavbarLinks />
            <div className="flex items-center gap-x-2 md:col-span-3">
                {user? (
                    <UserNav email={user.email as string} name={user.given_name as string} userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`} />
                ):(
                    <div className="hidden md:flex gap-x-2">
                        <Button asChild variant="secondary">
                            <LoginLink >Login</LoginLink>
                        </Button>
                        <Button asChild>
                            <RegisterLink>Register</RegisterLink>
                        </Button>
                    </div>
                )}
                
                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}

{/* <div className='btn flex gap-2'>
                <Button variant='secondary'>
                    <LoginLink>
                        Login
                    </LoginLink>
                </Button>
                <Button>
                    <RegisterLink>
                        Register
                    </RegisterLink>
                </Button>
            </div> */}
