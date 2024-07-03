import { NextResponse } from "next/server";
import Menu from   "../../../../models/menu"
import connectDB from "../../../../utils/db"


// fetch of menu data
export const GET = async (request) =>{
    try {

        await connectDB();kjkj

        const  menu = await Menu.find();
        return new NextResponse(JSON.stringify(menu),{status:200});

        
    } catch (error) {
        return new NextResponse("Error in fetching post" + error,{status:500});
        
    }
}