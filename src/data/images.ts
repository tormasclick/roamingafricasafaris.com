import masaiMara from "@/assets/destinations/masai-mara.jpg";
import amboseli from "@/assets/destinations/amboseli.jpg";
import serengeti from "@/assets/destinations/serengeti.jpg";
import ngorongoro from "@/assets/destinations/ngorongoro.jpg";
import zanzibar from "@/assets/destinations/zanzibar.jpg";
import lakeNakuru from "@/assets/destinations/lake-nakuru.jpg";
import mombasa from "@/assets/destinations/mombasa.jpg";
import nairobi from "@/assets/destinations/nairobi.jpg";
import tsavo from "@/assets/destinations/tsavo.jpg";
import bwindi from "@/assets/destinations/bwindi.jpg";
import tarangire from "@/assets/destinations/tarangire.jpg";
import lakeTurkana from "@/assets/destinations/lake-turkana.jpg";
import samburu from "@/assets/destinations/samburu.jpg";

export const destinationImages: Record<string, string> = {
  "masai-mara": masaiMara,
  amboseli,
  serengeti,
  ngorongoro,
  zanzibar,
  "lake-nakuru": lakeNakuru,
  mombasa,
  nairobi,
  tsavo,
  bwindi,
  tarangire,
  "lake-turkana": lakeTurkana,
  samburu,
};

export const getDestinationImage = (key: string): string => {
  return destinationImages[key] || masaiMara;
};
