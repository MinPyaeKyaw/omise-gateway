import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface userState {
  cards: Card[];
  addCard: (card: Card) => void;
}

const useCardStore = create<userState>()(
  persist(
    set => ({
      cards: [],
      addCard: (card: Card) =>
        set(state => ({
          cards: [...state.cards, card],
        })),
    }),
    {
      name: 'card',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useCardStore;
