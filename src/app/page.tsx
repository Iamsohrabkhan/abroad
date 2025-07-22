"use client";
import ChooseUs from "@/components/chooseus";
import FadeCrousel from "@/components/fadeCrousel";
import Faqs from "@/components/FAQ";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Marquee from "@/components/marque";
import PopularTrips from "@/components/popolartrip";
import Recomendeddestinations from "@/components/recomendeddestinations";
import Review from "@/components/review";
import Slider from "@/components/slider";
import Sponsored from "@/components/sponsored";
import { Container } from "@/components/ui/container";
export default function Home() {
  return (
    <>
        <Header />
        <Hero />
      <Marquee />
      <Container>
        <Slider />
        <PopularTrips />
      </Container>
      <FadeCrousel />
      <Container>
        <Faqs />
        <Review />
        <Sponsored />
        <Recomendeddestinations />
        <ChooseUs />
      </Container>

    </>
  );
}
