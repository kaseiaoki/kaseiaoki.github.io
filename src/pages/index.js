import profilePic from '../../public/icon.png'
const Index = () => {
  return (
    <>
      <section>
        <div className="hero is-fullheight">
          <div className="hero-body">
          <div class="container has-text-centered">
              <h1 className="is-size-1 is-family-sans-serif title">Kaisei Aoki</h1>
              <img src={profilePic.src} 
                        alt="Kasei Aoki"
                        width={256}
                        height={256} 
                        className="image is-128x128 shake me" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index