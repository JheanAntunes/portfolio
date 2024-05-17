import { HeroHighlight } from '../ui/hero-highlight'

const SectionInitial = () => {
  return (
    <div className="h-[calc(100svh_-_56px)] w-full">
      <HeroHighlight>
        <section className="container">
          <h1>
            <span className="text-lg sm:text-xl md:text-2xl">Olá, eu sou</span>
            <div className="font-serif text-xl font-normal sm:text-4xl md:text-6xl lg:text-7xl">
              Desenvolvedor - Front end
            </div>
          </h1>
          <p className="font-sans dark:text-neutral-300 lg:text-lg">
            que gosto de criar interfaces incríveis e animações surpreendentes
            para páginas da web. Vamos trabalhar juntos em um projeto!
          </p>
        </section>
      </HeroHighlight>
    </div>
  )
}

export default SectionInitial
