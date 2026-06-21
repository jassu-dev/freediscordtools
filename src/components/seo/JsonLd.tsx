interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a JSON-LD structured data script tag.
 * Used in Next.js App Router Server Components — outputs in <body> but still
 * fully crawlable. For <head> injection use generateMetadata other field instead.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
