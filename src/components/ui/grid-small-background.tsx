export function GridSmallBackground({ children }: React.PropsWithChildren) {
  return (
    <div className="relative w-full bg-background bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
      {children}
    </div>
  )
}
