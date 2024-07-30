import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text className="text-center text-4xl font-bold text-gray-700">
          Jarvis
        </Text>
        <Text>The Future is here, powered by AI.</Text>
      </View>
    </SafeAreaView>
  );
}
