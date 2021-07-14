import Image from 'next/image'
import profilePic from '../../public/icon.png'

const Index = () => {
  return (
    <>
      <section>
        <div class="hero is-fullheight">
          <div class="hero-body">
            <h1 class="is-size-1 is-family-sans-serif title">Kaisei Aoki</h1>
            <Image src={
                      profilePic} alt="kasei aoki"
                      width={256}
                      height={256} 
                      class="image is-128x128" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index