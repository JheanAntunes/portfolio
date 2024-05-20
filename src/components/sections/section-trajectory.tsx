import { GridSmallBackground } from '../ui/grid-small-background'
import { Separator } from '../ui/separator'

const CardTrajectoryTitle = ({ children }: React.PropsWithChildren) => (
  <h3 className="text-gradient-title font-serif text-2xl text-neutral-800 sm:text-center sm:text-3xl">
    {children}
  </h3>
)

const CardTrajectorydDescription = ({ children }: React.PropsWithChildren) => (
  <p className="text-gradient font-medium">{children}</p>
)
const SectionTrajectory = () => {
  return (
    <GridSmallBackground>
      <section
        id="trajectory"
        className="container mt-20 space-y-8 pb-20 md:mt-0"
      >
        <div className="space-y-2">
          <h2 className="text-gradient-title font-serif text-3xl sm:text-4xl md:text-center md:text-5xl lg:text-6xl">
            Trajetoria
          </h2>
          <p className="text-gradient font-medium md:text-center">
            Gostaria de aproveitar esta oportunidade para falar com vocês sobre
            a minha trajetoria na programação
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2">
          <li className="space-y-2">
            <CardTrajectoryTitle>Lógica de programação</CardTrajectoryTitle>
            <Separator className="w-32 sm:mx-auto" />
            <CardTrajectorydDescription>
              Comecei a estudar lógica de programação por recomendação de um
              amigo.
            </CardTrajectorydDescription>
          </li>
          <li className="space-y-2">
            <CardTrajectoryTitle>HTML & Css</CardTrajectoryTitle>
            <Separator className="w-32 sm:mx-auto" />
            <CardTrajectorydDescription>
              HTML5 assistindo aos vídeos do canal do Guanabara no Curso em
              Vídeo no YouTube.
            </CardTrajectorydDescription>
          </li>
          <li className="space-y-2">
            <CardTrajectoryTitle>Javascript</CardTrajectoryTitle>
            <Separator className="w-32 sm:mx-auto" />
            <CardTrajectorydDescription>
              Estudando a introdução do JavaScript assistindo aos vídeos do
              canal do Guanabara no Curso em Vídeo no YouTube e depois continuei
              com o canal CFBCursos.
            </CardTrajectorydDescription>
          </li>
          <li className="space-y-2">
            <CardTrajectoryTitle>React</CardTrajectoryTitle>
            <Separator className="w-32 sm:mx-auto" />
            <CardTrajectorydDescription>
              Aprendizagem da biblioteca React assistindo aos vídeos dos canais
              CFBCursos e Matheus Battisti - Hora de Codar.
            </CardTrajectorydDescription>
          </li>
          <li className="space-y-2">
            <CardTrajectoryTitle>TypeScript</CardTrajectoryTitle>
            <Separator className="w-32 sm:mx-auto" />
            <CardTrajectorydDescription>
              estudo de TypeScript, assistindo aos vídeos da Glaucia Lemos, que
              ensina com base no curso da Microsoft de TypeScript.
            </CardTrajectorydDescription>
          </li>
          <li className="space-y-2">
            <CardTrajectoryTitle>Retorno</CardTrajectoryTitle>
            <Separator className="w-32 sm:mx-auto" />
            <CardTrajectorydDescription>
              Retomei minha jornada de aprendizado com os cursos pagos da
              Origamid, com o objetivo de obter certificados. Durante esse
              processo, aprofundei meus conhecimentos nas tecnologias que já
              havia estudado.
            </CardTrajectorydDescription>
          </li>
        </ul>
      </section>
    </GridSmallBackground>
  )
}

export default SectionTrajectory
