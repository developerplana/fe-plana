import type { Metadata } from "next";
import HomePage from "./homepage/page";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plana.vision';
  
  return {
    alternates: {
      canonical: baseUrl,
    },
  };
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}