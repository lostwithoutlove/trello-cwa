import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  const { orgId } = auth();
  return (
    <div className="w-full mb-20">
      <div className="px-2 md:px-4">
        <p>Hi its me Organization : {orgId}</p>
      </div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border mt-4 p-2"
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>Board name: {board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
