import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../components/GlobalContext';
import {useGetRequest} from '../helpers/hooks';
import {BROADCASTS} from '../helpers/urls';
import {globalStyles} from '../styles';
import BackgroundImage from '../images/backgrounds/detail.png';
import Header from '../components/Header';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get('window');
export default function Translations() {
  const {lang, translations} = useContext(GlobalContext);
  const [broadcasts, setBroadcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const broadcastsRequest = useGetRequest({url: BROADCASTS});

  const getBroadcasts = async () => {
    const {response} = await broadcastsRequest.request();
    if (response?.length) {
      setBroadcasts(response);
    }
  };

  useEffect(() => {
    getBroadcasts();
  }, []);

  return (
    <View style={globalStyles.container}>
      <ImageBackground source={BackgroundImage} style={globalStyles.container}>
        <Header />

        {translations?.length ? (
          <>
            <ScrollView
              style={globalStyles.scrollFlex}
              contentContainerStyle={globalStyles.scroll}>
              {broadcasts?.map((item, index) => (
                <View key={index} style={styles.container}>
                  <Text style={styles.title}>{item?.liga}</Text>
                  <View style={styles.item}>
                    <Text style={styles.league}>
                      {item?.team1} - {item?.team2}
                    </Text>

                    <View style={styles.row}>
                      <Text style={styles.date}>{item?.date}</Text>
                      <Text style={styles.time}>{item?.time}</Text>
                    </View>
                  </View>
                  {/*<View style={styles.left}>*/}
                  {/*  <Text style={styles.league}>{item?.liga}</Text>*/}
                  {/*</View>*/}
                  {/*<View style={styles.right}>*/}
                  {/*  <View style={styles.rightCircle}>*/}
                  {/*    <Text style={styles.league}>{item?.date}</Text>*/}
                  {/*    <Text style={styles.league}>{item?.time}</Text>*/}
                  {/*  </View>*/}

                  {/*  <View>*/}
                  {/*    <Text style={styles.league}>{item?.team1}</Text>*/}
                  {/*    <Text style={styles.league}>{item?.team2}</Text>*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                </View>
              ))}
            </ScrollView>
          </>
        ) : (
          ''
        )}
      </ImageBackground>

      {!translations?.length || loading ? <Loading /> : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.bold,
  },
  item: {
    width: '90%',
    backgroundColor: COLORS.white,
    height: 100,
    borderRadius: 12,
  },
  league: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginTop: 10,
  },
  row: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  date: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.bold,
    backgroundColor: COLORS.blue500,
    padding: 5,
    borderRadius: 25,
  },
  time: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.bold,
    backgroundColor: COLORS.input,
    padding: 5,
    borderRadius: 25,
  },
});
