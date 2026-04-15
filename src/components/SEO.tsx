import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  jsonLd?: object;
}

const SEO = ({ title, description, canonical, type = "website", image, jsonLd }: SEOProps) => (
  <Helmet>
    <title>{title} | Roaming Africa Tours and Safaris</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    {canonical && <link rel="canonical" href={canonical} />}
    {image && <meta property="og:image" content={image} />}
    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default SEO;
