import { getLegalPage } from "@/lib/sanity";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { notFound } from "next/navigation";

export default async function PrivacyPolicyPage() {
  const page = await getLegalPage("privacy-policy");

  if (!page) {
    notFound();
  }

  return <LegalPageLayout page={page} />;
}
