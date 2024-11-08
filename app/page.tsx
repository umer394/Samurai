import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


import Shaping from "@/components/Shaping";
import Solutions from "@/components/Solutions";


export default function Home() {
  return (
    <main className="bg-black h-full overflow-clip" >
      <Navbar/>
      <Hero/>
      <Solutions/>
      <Shaping/>
      <Footer/>
    </main>
  );
}
