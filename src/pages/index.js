import profilePic from '../../public/icon.png'
const Index = () => {
  return (
    <>
      <section>
        <div className="hero is-fullheight">
          <div className="hero-body">
            <h1 className="is-size-1 is-family-sans-serif title">Kaisei Aoki</h1>
            <img src={profilePic.src} 
                      alt="kasei aoki"
                      width={256}
                      height={256} 
                      className="image is-128x128" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index