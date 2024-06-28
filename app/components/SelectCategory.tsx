"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "../lib/categoryItems";
import { useState } from "react";

export default function SelectCategory(){
    const [SelectCategory,setSelectCategory] = useState<string | null>(null)
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                categoryItems.map((items)=>(
                    <div className="cursor-pointer" key={items.id}>
                        <Card className={SelectCategory === items.name ? 
                            'border-primary  border-2': 
                            'border-2 border-primary/10'}
                         onClick={()=>setSelectCategory(items.name)}>
                            <CardHeader>
                                {items.Image} 
                                <h3 className="font-medium ">{items.title}</h3>
                            </CardHeader>

                        </Card>
                    </div>
                ))
            }
        </div>
    )
}