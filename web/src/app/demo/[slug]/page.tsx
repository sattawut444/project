import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sites } from "../sites";
import DemoSite from "../demo-site";

export function generateStaticParams() {
  return Object.keys(sites).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const site = sites[slug];
  if (!site) return {};
  return {
    title: `${site.brand} — ${site.category}`,
    description: site.hero.subtitle,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = sites[slug];
  if (!site) notFound();
  return <DemoSite site={site} />;
}
