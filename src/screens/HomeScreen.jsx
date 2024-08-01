import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';
import {dummyMessages} from '../constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <View className="flex-1 text-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/JarvisBot.gif')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1">
              Assistant
            </Text>
            <View
              style={{height: hp(58)}}
              className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image
                              source={{uri: message.content}}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{height: wp(60), width: wp(60)}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View
                          key={index}
                          style={{width: wp(70)}}
                          className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{width: wp(70)}}
                          className="bg-white rounded-xl p-2 rounded-tr-none">
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
}
