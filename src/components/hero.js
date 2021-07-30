import profilePic from '../../public/icon.png'
const Hero = ({ pageTitle, subTitle, iconImage }) => {
  const title = pageTitle
  const image = iconImage ?? profilePic
  return (
    <>
      <section>
        <div className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='is-size-1 is-family-sans-serif title'>{title}</h1>
              <span>{subTitle}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
