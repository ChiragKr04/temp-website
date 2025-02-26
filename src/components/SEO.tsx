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
      <meta name="author" content="Abhishek Sandilya" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:site_name" content="Abhishek Sandilya & Associates" />

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
          "logo": `${siteUrl}logo.png`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          },
          "founder": {
            "@type": "Person",
            "name": "Abhishek Sandilya",
            "jobTitle": "Advocate",
            "description": "Experienced advocate practicing in Delhi High Court",
            "url": siteUrl,
            "sameAs": [
              "https://www.linkedin.com/in/abhishek-sandilya/",  // Add your actual LinkedIn URL
              "https://www.facebook.com/abhishek.sandilya"      // Add your actual Facebook URL
            ],
            "knowsAbout": [
              "Civil Law",
              "Criminal Law",
              "Corporate Law",
              "Family Law",
              "Delhi High Court Litigation"
            ],
            "worksFor": {
              "@type": "LegalService",
              "name": "Abhishek Sandilya & Associates"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Delhi"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Civil Law Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Criminal Law Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Corporate Law Services"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 