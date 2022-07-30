import React from "react"
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Typograph } from "../Typograph";
import { Icon } from "../VectorIcon";
import {
  Container,
  IconTouchable
} from './styles';

interface CardProps {
  title: string;
  body: string;
  list?: boolean;
  onPressTrash?: () => void;
  onPressStar?: () => void;
  trashLoading?: boolean;
  favorited?: boolean;
  favoriteLoading?: boolean;
}

export const Card = ({title, body, list, onPressTrash, onPressStar, trashLoading, favorited, favoriteLoading}: CardProps) => {
  return (
    <Container>
      <Typograph color='title' fontWeight="Medium">{title}</Typograph>
      <Typograph color='text' fontWeight="Regular">{body}</Typograph>
      {
        list && (
          !trashLoading ?
          <IconTouchable activeOpacity={0.8} onPress={() => {onPressTrash && onPressTrash();}}>
            <Icon type='Ionicons' name='trash' size={18} color='#0f0f0f' />
          </IconTouchable> :
          <ActivityIndicator
            size='small'
            color='#808f80'
            style={{
              position: 'absolute',
              right: 10,
              bottom: 10
            }}
          />
        )
      }
      {
        list && (
          (
            favoriteLoading ? 
            <ActivityIndicator 
              size='small'
              color='#efef0f'
              style={{
                position: 'absolute',
                right: 40,
                bottom: 11
              }}
            />
            : favorited ?
            <IconTouchable star activeOpacity={0.8} onPress={() => {onPressStar && onPressStar();}}>
              <Icon type='Ionicons' name='star' size={18} color='#f0f00f' />
            </IconTouchable>
            :
            <IconTouchable star activeOpacity={0.8} onPress={() => {onPressStar && onPressStar();}}>
              <Icon type='Ionicons' name='star-outline' size={18} color='#0f0f0f' />
            </IconTouchable>
          )
        )
      }
    </Container>
  )
}