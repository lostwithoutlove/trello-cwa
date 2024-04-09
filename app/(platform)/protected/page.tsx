import { auth, currentUser, UserButton } from "@clerk/nextjs";

const ProtectedPage = async () => {
  const user = await currentUser();
  const { userId } = auth();

  return (
    <div>
      User : {user?.firstName}
      userId:{userId}
      <UserButton afterSignOutUrl="/" />
      What about me
    </div>
  );
};

export default ProtectedPage;
