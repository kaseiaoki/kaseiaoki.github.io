import profilePic from '../../public/icon.png'
// import SideMenu from '../components/side-menu'
import SeoMeta from '../foundations/seo-meta'
const Index = () => {
  const pageTitle = "";
  return (
    <>
      <section>
      <SeoMeta
            pageTitle = { pageTitle }
            pageDescription = { "青木開生(kaisei aoki)のページ" }
            pagePath = {"/"}
         />
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="is-size-1 is-family-sans-serif title">Kaisei Aoki</h1>
              <img src={profilePic.src} 
                        alt="Kasei Aoki"
                        width={256}
                        height={256} 
                        className="image is-128x128 shake me" />
            </div>
            {/* <SideMenu /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Index