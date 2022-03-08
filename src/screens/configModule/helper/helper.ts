import {Alert, Linking, Share} from 'react-native';

export const openLink = async (link: string) => {
  let canOpen = await Linking.canOpenURL(link);
  if (canOpen) {
    Linking.openURL(link);
  }
};

export const shareApp = async () => {
  try {
    const result = await Share.share({
      message: 'https://domainnewstest.page.link/Musala',
    });
    if (result.action === Share.sharedAction) {
    } 
    else if (result.action === Share.dismissedAction) {
     }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
