import Image from "next/image";

export default function Navbar() {
  return (
    <section className="fixed navBar px-10">
      <nav className="flex justify-between p-10">
        <Image src="/next.svg" alt="FitFusion Logo" width={100} height={100} />
      </nav>
    </section>
  );
}
