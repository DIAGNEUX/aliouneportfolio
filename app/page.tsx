
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import Navbar from "@/Components/Navbar";
import Competences from "@/Components/Competences";
import Projets from "@/Components/Projets";
import Qualites from "@/Components/Qualites";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col 
      sm:px-10 overflow-hidden px-5"> 
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero  />
        <Grid />
        <Competences />
        <Projets />
        <Qualites />
        <Footer />
      </div>
    </div>
  );
}
