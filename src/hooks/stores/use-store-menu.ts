import { create } from 'zustand'

type State = {
  isMenu: boolean
}

type Action = {
  setIsMenu: (newState: boolean) => void
}

type useStoreMenuProps = State & Action
const useStoreMenu = create<useStoreMenuProps>()((set) => ({
  isMenu: false,
  setIsMenu: (newState) => set(() => ({ isMenu: newState }))
}))

export default useStoreMenu
