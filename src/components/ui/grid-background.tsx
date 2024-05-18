export function GridBackground({ children }: React.PropsWithChildren) {
  return (
    <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex h-full w-full items-center justify-center bg-background dark:bg-background">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] md:flex"></div>
      {children}
    </div>
  )
}
