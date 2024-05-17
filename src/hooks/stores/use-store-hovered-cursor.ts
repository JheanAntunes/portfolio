import { create } from 'zustand'

type StateStore = {
  isHoveredCursor: boolean
}

type ActionStore = {
  setIsHoveredCursor: (state: boolean) => void
}

export const useStoreHoveredCursor = create<StateStore & ActionStore>()(
  (set) => ({
    isHoveredCursor: false,
    setIsHoveredCursor: (state) => set(() => ({ isHoveredCursor: state }))
  })
)
