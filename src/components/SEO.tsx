import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
}

const SEO = ({ title, description, keywords, canonicalUrl }: SEOProps) => {
  const siteUrl = 'https://abhishek-sandillya-1995.vercel.app/';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Abhishek Sandilya & Associates",
          "description": description,
          "url": siteUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          },
          "founder": {
            "@type": "Person",
            "name": "Abhishek Sandilya",
            "jobTitle": "Lawyer",
            "description": "Experienced lawyer practicing in Delhi High Court"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 