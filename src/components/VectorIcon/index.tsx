import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Zocial from '@expo/vector-icons/Zocial';
import { ViewStyle, TextStyle, OpaqueColorValue } from 'react-native';

interface IconProps {
  style?: ViewStyle | TextStyle;
  color?: string | OpaqueColorValue;
  borderRadius?: number;
  iconStyle?: TextStyle;
  backgroundColor?: string | OpaqueColorValue;
  size?: number;
  name?: string;
}

export const Icon = ({type, ...rest}: IconProps | any) => {
  switch (type) {
    case 'Entypo':
      return <Entypo {...rest}/>;
    case 'AntDesign':
      return <AntDesign {...rest}/>;
    case 'EvilIcons':
      return <EvilIcons {...rest}/>;
    case 'Feather':
      return <Feather {...rest}/>;
    case 'FontAwesome':
      return <FontAwesome {...rest}/>;
    case 'FontAwesome5':
      return <FontAwesome5 {...rest}/>;
    case 'Fontisto':
      return <Fontisto {...rest}/>;
    case 'Foundation':
      return <Foundation {...rest}/>;
    case 'Ionicons':
      return <Ionicons {...rest}/>;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...rest}/>;
    case 'MaterialIcons':
      return <MaterialIcons {...rest}/>;
    case 'Octicons':
      return <Octicons {...rest}/>;
    case 'SimpleLineIcons':
      return <SimpleLineIcons {...rest}/>;
    case 'Zocial':
      return <Zocial {...rest}/>;
    default:
      return <Entypo />;
  }
}
