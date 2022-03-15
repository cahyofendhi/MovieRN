/* eslint-disable require-jsdoc */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sessionLoginKey = 'is_user_login';

async function setItem(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
  }
}

async function getItem(key: string): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

export {
  setItem, getItem,
};


