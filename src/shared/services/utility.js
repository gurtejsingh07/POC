import {scaleText} from 'react-native-text';
import {Alert} from 'react-native';
export const _scaleText = fontSize => {
  return scaleText({fontSize});
};

export const _showNativeAlert = ({title = '', subtitle = '', buttons = []}) => {
  Alert.alert(title, subtitle, [...buttons]);
};
