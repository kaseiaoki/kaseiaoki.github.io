
export default function JsonLDWebPageSchema(title, url, desc, image, defaultTitle, type) {
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        name: title,
        headline: title,
        // datePublished: "",
        // dateModified: "",
        url: url,
        mainEntityOfPage: url,
        image: image,
        description: desc,
        "publisher": {
            "@type": type,
            "name": defaultTitle
        }
      };
      

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	)
}