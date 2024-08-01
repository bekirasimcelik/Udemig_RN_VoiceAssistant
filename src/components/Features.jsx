import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../assets/images/chatGPT.png')}
            style={{width: hp(4), height: hp(4)}}
            className="rounded-md"
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledge responses, assist
          you with creative idead on a wide range of topics.
        </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../assets/images/dall-e.png')}
            style={{width: hp(4), height: hp(4)}}
            className="rounded-md"
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            Dall-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          Dell-E can provide you with instant and knowledge responses, assist
          you with creative idead on a wide range of topics.
        </Text>
      </View>
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../assets/images/smartAI.png')}
            style={{width: hp(4), height: hp(4)}}
            className="rounded-md"
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            Smart AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          Smart AI can provide you with instant and knowledge responses, assist
          you with creative idead on a wide range of topics.
        </Text>
      </View>
    </View>
  );
}
