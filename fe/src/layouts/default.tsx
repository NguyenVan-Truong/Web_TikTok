import Footer from "./../components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <main className="container ">{children}</main>
      <Footer />
    </div>
  );
}
