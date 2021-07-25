import Head from 'next/head'
import JsonLDWebPageSchema from './seo-json-ld'
import profilePic from '../../public/icon.png'
const stripHtml = require("string-strip-html");

const SeoMeta = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
  pageCanonical,
  pageFor
}) => {
  const defaultTitle = 'Kaisei Aoki\'s page | 青木開生のページ'
  const defaultDescription = 'Kaisei Aoki\'s page : 青木開生のページ'
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = stripHtml(pageDescription ? pageDescription : defaultDescription)
  const url = pageCanonical ?? pagePath 
  const imgUrl = pageImg ?? profilePic.src
  const imgWidth = pageImgWidth ? pageImgWidth : 256
  const imgHeight = pageImgHeight ? pageImgHeight : 256
  const type = pageFor ?? 'ProfilePage'

  return (
    <Head>
      <title>{title}</title>
      lang= ja
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="canonical" href={url} />
      <JsonLDWebPageSchema
            title = {title}
            url = {url}
            desc = {description}
            image = {imgUrl}
            defaultTitle  = {title}
            type = {type}
        />
    </Head>
  )
}

export default SeoMeta