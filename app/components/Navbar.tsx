import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
    return (
        <div className="relative max-w-7xl w-full flex items-center justify-between px-4 md:px-8 mx-auto py-7">
            <div className="flex items-center">
                <Link href='/' className="text-xl md:text-2xl lg:text-4xl font-bold">
                    Design<span className="text-gradient">Hive</span>
                </Link>
            </div>
            <NavbarLinks />
            <div className="flex items-center gap-x-2 md:col-span-3">
                <div className="hidden md:flex gap-4">
                    <Button variant="secondary">Login</Button>
                    <Button>Register</Button>
                </div>
                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}
