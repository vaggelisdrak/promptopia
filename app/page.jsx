import Feed from "@components/Feed"

const Home = () => {
  return (
    <div>
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center"> AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Promptopia is a unique and innovative platform designed to inspire, challenge, and unleash your creative potential. Whether you're a writer, artist, designer, or simply seeking a spark of imagination, Promptopia is the ultimate destination for all things creative.
            </p>

            <Feed/>
        </section>
    </div>
  )
}

export default Home