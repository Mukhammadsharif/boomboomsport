import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetRequest} from '../helpers/hooks';
import {TRANSLATE} from '../helpers/urls';

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [refresh, setRefresh] = useState(false);
  const [lang, setLang] = useState('ru');
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [translations, setTranslations] = useState([]);

  const getLanguagesRequest = useGetRequest({url: TRANSLATE});

  const getLocale = async () => {
    const language = await AsyncStorage.getItem('language');
    const localAvatar = await AsyncStorage.getItem('avatar');
    const localName = await AsyncStorage.getItem('name');
    const localPhone = await AsyncStorage.getItem('phone');
    const localAddress = await AsyncStorage.getItem('address');
    if (language) {
      setLang(language);
    }

    if (localAvatar) {
      setAvatar(localAvatar);
    }

    if (localName) {
      setName(localName);
    }

    if (localPhone) {
      setPhone(localPhone);
    }

    if (localAddress) {
      setAddress(localAddress);
    }
  };

  const getLanguages = async () => {
    const {response} = await getLanguagesRequest.request();
    if (response?.length) {
      setTranslations(response);
    }
  };

  useEffect(() => {
    getLanguages();
    getLocale();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        refresh,
        setRefresh,
        lang,
        setLang,
        avatar,
        setAvatar,
        name,
        setName,
        phone,
        setPhone,
        address,
        setAddress,
        translations,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
