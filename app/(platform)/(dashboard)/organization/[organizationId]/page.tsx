"use client";

//import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { create } from "@/actions/create-board";

const OrganizationIdPage = () => {
  //const { orgId } = auth();
  return (
    <div className="w-full mb-20">
      <div className="px-2 md:px-4">
        <p>Hi its me Organization : orgId</p>
      </div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border mt-4 p-2"
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
