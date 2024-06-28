import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectCategory from "../components/SelectCategory";


export default function SellRoute(){
    return (
        <section className="max-w-5xl mx-auto px-4 md:px-8">
            <Card>
                <form>
                    <CardHeader>
                        <CardTitle>Sell on DesignHive</CardTitle>
                        <CardDescription>Please describe your product here in detail so that it can be sold</CardDescription>   
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <Label>Name</Label>
                            <Input type="text" placeholder="Name of your product"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Category</Label>
                            <SelectCategory/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Price</Label>
                            <Input type="number" placeholder="Price of your product"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Description</Label>
                            <Textarea type="text" placeholder="describe your product in short"/>
                        </div>
                    </CardContent> 
                </form>
            </Card>
        </section>
    )
}