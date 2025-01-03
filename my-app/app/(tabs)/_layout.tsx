import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 68,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
        },
        tabBarActiveTintColor: '#29398e',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '600',
          fontFamily: 'Inter',
        },
        tabBarIconStyle: {
          width: 32,
          height: 32,
          marginRight: 6,
        },
      }}>
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star" size={32} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}