"use server"

import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server"
import { desc, eq } from "drizzle-orm";

export async function getHistoryActions() {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    const results = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user.emailAddresses[0]?.emailAddress)).orderBy(desc(AIOutput?.createdAt));

    return results;
}