
import AboutUs from "@/components/About";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : 'About Us',
  description : "SAP provides innovative solutions that empower businesses and drive success. Learn more about our mission, vision, and the values that drive our company forward.",
}

export default function Page() {

  return (
    <AboutUs />
  );
}


