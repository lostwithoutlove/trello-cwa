import { auth, OrganizationSwitcher } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { orgId } = auth();
  return (
    <div className="w-full mb-20">
      <div className="px-2 md:px-4">
        <p>Hi its me Organization : {orgId}</p>
        <OrganizationSwitcher />
      </div>
    </div>
  );
};

export default OrganizationIdPage;
