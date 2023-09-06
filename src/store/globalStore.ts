import { UserInfo } from 'types/global';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'


interface GlobalStoreState {
  userInfo: UserInfo | null;
  setUserInfo: (data: UserInfo | null) => void;
}

const store = immer<GlobalStoreState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set((state) => {
    state.userInfo = userInfo
  }),
  // setUserInfo: (userInfo) => alert(JSON.stringify(userInfo)),
}));

const useAuthStore = create(persist(devtools(store), { name: 'globalStore' }));

export default useAuthStore;