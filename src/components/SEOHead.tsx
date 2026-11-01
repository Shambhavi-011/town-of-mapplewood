import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  category?: string;
  schemaData?: Record<string, unknown>;
}

export default function SEOHead({ title, description, category, schemaData }: SEOHeadProps) {
  const location = useLocation();
  const canonicalUrl = `https://mapplewood-fictional-town.onrender.com${location.pathname}`;
  const fullTitle = `${title} | Town of Maplewood`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOgTag('og:title', fullTitle);
    setOgTag('og:description', description);
    setOgTag('og:url', canonicalUrl);

    // 5. Inject / Update Page Specific JSON-LD Schema
    const scriptId = 'page-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'GovernmentService',
      name: title,
      description: description,
      serviceType: category || 'Municipal Service',
      provider: {
        '@type': 'GovernmentOrganization',
        name: 'Town of Maplewood',
        url: 'https://mapplewood-fictional-town.onrender.com',
        telephone: '(555) 123-4567'
      },
      url: canonicalUrl
    };

    script.textContent = JSON.stringify(schemaData || defaultSchema);
  }, [fullTitle, description, canonicalUrl, category, schemaData]);

  return null;
}

