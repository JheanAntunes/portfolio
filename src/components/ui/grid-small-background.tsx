export function GridSmallBackground({ children }: React.PropsWithChildren) {
  return (
    <div className="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative w-full bg-background">
      {children}
    </div>
  )
}
