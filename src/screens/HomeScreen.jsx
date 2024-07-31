import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeScreen() {
  return (
    <View className="flex-1 text-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/JarvisBot.gif')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
