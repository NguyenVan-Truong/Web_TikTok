import Navbar from "../components/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:flex">
      <main className="container sm:order-2">{children}</main>{" "}
      <div className="sm:order-1">
        <Navbar />
      </div>
    </div>
  );
}
