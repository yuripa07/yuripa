import { getLegalPage } from "@/lib/sanity";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { notFound } from "next/navigation";

export default async function TermsOfServicePage() {
  const page = await getLegalPage("terms-of-service");

  if (!page) {
    notFound();
  }

  return <LegalPageLayout page={page} />;
}
