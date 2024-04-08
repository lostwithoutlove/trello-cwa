import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-slate-200">
      <Navbar />
      <main className="pt-40 pb-10 bg-slate-200 h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
