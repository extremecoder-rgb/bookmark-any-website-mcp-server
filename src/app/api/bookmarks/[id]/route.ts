import { NextRequest, NextResponse } from "next/server";
import {auth} from "@clerk/nextjs/server";
import { deleteUserBookmark } from "@/lib/bookmark-utils";

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try{
        const {userId} = await auth();
        if(!userId){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const { id } = await context.params;

        await deleteUserBookmark(userId, id);
        return NextResponse.json({message: "Bookmark deleted successfully"}, {status: 200});
    } catch(error){
        console.error("Error deleting bookmark:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}