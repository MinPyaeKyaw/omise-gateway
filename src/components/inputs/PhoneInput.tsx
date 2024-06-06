import {
  Text,
  Input,
  useTheme,
  HStack,
  Pressable,
  IInputProps,
  useDisclose,
  Actionsheet,
  Box,
  Icon,
} from 'native-base';
import {makeStyle} from './style';
import {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {countries} from '../../assets/countries';
import {SearchInput} from './SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UseFormReturn} from 'react-hook-form';

interface Props extends IInputProps {
  placeholder: string;
  label: string;
  required?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

export function PhoneInput({
  placeholder,
  label,
  required = false,
  form,
  name,
  ...props
}: Props) {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const {isOpen, onOpen, onClose} = useDisclose();

  const [selectedCountry, setSelectedCountry] = useState<Country>({
    country: 'Myanmar, Union of (Former Burma)',
    countryCode: 'MM',
    phonePrefix: '+95',
  });
  const [searchCountryValue, setSearchCountryValue] = useState<string>('');

  const handleCloseCountryList = () => {
    onClose();
    setSearchCountryValue('');
  };

  const handleChangeCountry = (country: Country) => {
    setSelectedCountry(country);
    handleCloseCountryList();
  };

  const ListItemSeperator = () => {
    return <View style={styles.listItemSeperator} />;
  };

  return (
    <>
      <HStack mb="1" space="1">
        <Text>{label}</Text>
        {required && <Text color="red.500">*</Text>}
      </HStack>
      <Input
        placeholder={placeholder}
        variant="unstyled"
        focusOutlineColor="secondary.600"
        borderRadius="lg"
        fontWeight="200"
        fontSize="md"
        InputLeftElement={
          <Pressable onPress={onOpen} style={styles.phonePrefix}>
            <Text>{selectedCountry.phonePrefix}</Text>
            <Icon as={Ionicons} name="caret-down-outline" size="xs" />
          </Pressable>
        }
        style={styles.textInput}
        onChangeText={e => form.setValue(name, selectedCountry.phonePrefix + e)}
        {...props}
      />
      {form.formState.errors[name]?.message && !form.watch(name) && (
        <Text color="error.700" fontSize="xs">
          {form.formState.errors[name].message}
        </Text>
      )}

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content minH="80%" w="100%">
          <Box style={styles.phoneCodeContainer}>
            <SearchInput
              placeholder={'Search...'}
              onChangeText={e => setSearchCountryValue(e)}
            />

            <SafeAreaView style={styles.phoneCodeSafeArea}>
              <FlatList
                data={countries.filter(country =>
                  country.country
                    .toLowerCase()
                    .includes(searchCountryValue.toLowerCase()),
                )}
                ItemSeparatorComponent={() => <ListItemSeperator />}
                renderItem={({item}: {item: Country}) => (
                  <Pressable
                    key={item.country}
                    onPress={() => handleChangeCountry(item)}
                    py="5">
                    <HStack justifyContent="space-between" space="5">
                      <Text noOfLines={1}>{item.country}</Text>
                      <Text>{item?.phonePrefix}</Text>
                    </HStack>
                  </Pressable>
                )}
                keyExtractor={item => item.country}
              />
            </SafeAreaView>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
