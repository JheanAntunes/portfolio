import { HeroHighlight } from '../ui/hero-highlight'

const SectionInitial = () => {
  return (
    <div className="h-[calc(100svh_-_56px)] w-full">
      <HeroHighlight>
        <section>
          <h1>
            <span>Olá, eu sou</span>
            <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Desenvolvedor - Front end
            </div>
          </h1>
          <p className="dark:text-neutral-300">
            que gosto de criar interfaces incríveis e animações surpreendentes
            para páginas da web. Vamos trabalhar juntos em um projeto!
          </p>
        </section>
      </HeroHighlight>
    </div>
  )
}

export default SectionInitial
