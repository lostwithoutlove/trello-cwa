const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-40 h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
