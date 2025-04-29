import CardsHomepage from "@/components/homepage/CardsHomepage";
import LandingHomepage from "@/components/homepage/LandingHomepage";
import { generateBodyweightWorkout } from "@/utils/generateWorkout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  generateBodyweightWorkout();
  return (
    <div className="py-24 w-full max-w-[100%] mx-auto">
      {" "}
      <LandingHomepage />
      <CardsHomepage />
    </div>
  );
}
