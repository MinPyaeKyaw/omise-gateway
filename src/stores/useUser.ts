import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface userState {
  persistUser: {
    username: string;
    password: string;
    email: string;
    phone: string;
    login: boolean;
  };
  login: () => void;
  logout: () => void;
}

const useUserStore = create<userState>()(
  persist(
    set => ({
      persistUser: {
        username: 'Sai Min',
        password: '123',
        email: 'saimin@gmail.com',
        phone: '+959899587877',
        login: false,
      },
      login: () =>
        set(state => ({
          persistUser: {
            ...state.persistUser,
            login: true,
          },
        })),
      logout: () =>
        set(state => ({
          persistUser: {
            ...state.persistUser,
            login: false,
          },
        })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
