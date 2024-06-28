import { ChefHat, Globe, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps{
    name: string;
    title: string;
    Image: ReactNode;
    id: number;
}

export const categoryItems: iAppProps[] = [
    {
        id: 0,
        name: "template",
        title: "Template",
        Image: <Globe/>
    },
    {
        id: 1,
        name: "ui Kits",
        title: "UI Kits",
        Image: <ChefHat/>
    },
    {
        id: 3,
        name: "icon",
        title: "Icon",
        Image: <PartyPopper/>
    }
]