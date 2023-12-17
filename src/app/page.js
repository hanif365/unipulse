import Header from "@/components/HomePageComponents/Header/Header";
import CollegeCard from "@/components/HomePageComponents/CollegeCard/CollegeCard";
import PhotoGallery from "@/components/HomePageComponents/PhotoGallery/PhotoGallery";
import Research from "@/components/CollegeComponents/Research/Research";
import Testimonials from "@/components/HomePageComponents/Testimonials/Testimonials";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Header />
      <CollegeCard />
      <Research />
      <Testimonials />
      <PhotoGallery />
    </main>
  )
}
