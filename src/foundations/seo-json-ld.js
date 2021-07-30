export default function JsonLDWebPageSchema(title, url, desc, image, defaultTitle, type) {
  const jsonLd = () => {
    const json = {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: title,
      headline: title,
      // datePublished: "",
      // dateModified: "",
      url: url,
      mainEntityOfPage: url,
      image: image,
      description: desc,
      publisher: {
        '@type': type,
        name: defaultTitle,
      },
    }
    return JSON.stringify(json)
  }
  return (
    <script
      key='json-ld'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: jsonLd() }}
    />
  )
}
