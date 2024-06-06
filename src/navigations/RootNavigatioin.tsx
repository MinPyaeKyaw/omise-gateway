import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../config/const';
import {CardCreate, CardLists} from '../screens';
import {DetailHeader, ListHeader} from './components';

export function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
      initialRouteName={SCREEN_NAMES.CARD_LISTS}>
      <Stack.Screen
        options={{
          header: () => <ListHeader title={SCREEN_NAMES.CARD_LISTS} />,
        }}
        name={SCREEN_NAMES.CARD_LISTS}
        component={CardLists}
      />
      <Stack.Screen
        options={{
          header: () => <DetailHeader />,
        }}
        name={SCREEN_NAMES.CARD_CREATE}
        component={CardCreate}
      />
    </Stack.Navigator>
  );
}
