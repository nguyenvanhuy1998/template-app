/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../constants';
import {
  CategoryScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';
import {CustomIcon} from '../components';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name={'Trang chủ'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="home"
              size={24}
              color={
                focused
                  ? theme.COLORS.primaryBlueHex
                  : theme.COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Danh mục'}
        component={CategoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="menu"
              size={24}
              color={
                focused
                  ? theme.COLORS.primaryBlueHex
                  : theme.COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Tìm kiếm'}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="search"
              size={24}
              color={
                focused
                  ? theme.COLORS.primaryBlueHex
                  : theme.COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Tài khoản'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="like"
              size={24}
              color={
                focused
                  ? theme.COLORS.primaryBlueHex
                  : theme.COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {},
});
