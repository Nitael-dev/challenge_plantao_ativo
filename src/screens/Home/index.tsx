import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { PostResponse } from "../../interfaces/Posts";
import { formatString } from "../../helpers/formatString";
import {
  Container,
  CardList,
  ModalContainer,
  Button,
  NotFoundResults
} from './styles';
import Modal from 'react-native-modal';
import { usePosts } from "../../contexts/PostsContext";
import { Typograph } from "../../components/Typograph";
import { Input } from '../../components/Input';
import NetInfo from '@react-native-community/netinfo';
import { favoriteVerify } from "../../utils/Home";
import { handleFavorite } from "../../handlers/Home";
import { ActivityIndicator } from "react-native";

interface ListProps {
  item: PostResponse;
  index: number;
}

export const Home = () => {
  const {
    posts,
    setPosts,
    getPosts,
    postPosts,
    deletePost
  } = usePosts();

  const[isConnected, setIsConnected] = useState(false);

  const[isLoading, setIsLoading] = useState(false);
  const[favoriteLoading, setFavoriteLoading] = useState(-1);
  const[trashLoading, setTrashLoading] = useState(-1);

  const[isModalVisible, setIsModalVisible] = useState(false);
  const[previewVisible ,setPreviewVisible] = useState(false);
  
  const[favoriteState, setFavoriteState] = useState<string[]>([]);
  
  const[searchState, setSearchState] = useState('');
  const[notFoundSearch, setNotFoundSearch] = useState('');
  const[titleState, setTitleState] = useState('');
  const[bodyState, setBodyState] = useState('');
  const[newTitleState, setNewTitleState] = useState('');
  const[newBodyState, setNewBodyState] = useState('');
  
  const[error, setError] = useState(false);

  const handlePost = () => {
    if(!titleState || !bodyState) {
      setError(true);
      return;
    }
    postPosts({body: bodyState, idUser: 1, title: titleState});
    setPreviewVisible(true);
    setNewTitleState(titleState);
    setNewBodyState(bodyState);
    handleCloseModal();
  }

  const handleDelete = async (id: number) => {
    setTrashLoading(id);
    try {
      await deletePost(id);
      setTrashLoading(-1);
      setPosts(old => old.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPosts = async () => {
    setIsLoading(true);
    if(searchState) {
      const result = await getPosts(searchState);
      previewVisible && setPreviewVisible(false);
      result === -1 && setNotFoundSearch(searchState);
      result !== -1 && notFoundSearch && setNotFoundSearch('');
      setSearchState('');
    } else {
      await getPosts();
    }
    setIsLoading(false);
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setError(false);
    setTitleState('');
    setBodyState('');
  }

  const networkVerify = async () => {
    await NetInfo.fetch().then(state => {setIsConnected(!!state.isConnected)}).catch(err => {console.log(err)})
  } 

  useEffect(() => {
    networkVerify();
    handleGetPosts();
    handleFavorite(setFavoriteState);
  },[])

  return (
    <>
      <Modal
        onBackdropPress={handleCloseModal}
        isVisible={isModalVisible}
        backdropOpacity={0.20}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalContainer>
          <Input error={error} label='Tìtulo:' value={titleState} onChangeText={(text) => {error && setError(false);setTitleState(text)}}/>
          <Input error={error} label='Corpo:' value={bodyState} onChangeText={(text) => {error && setError(false);setBodyState(text)}}/>
          <Button activeOpacity={0.75} onPress={() => {handlePost()}}>
            <Typograph>Enviar Post</Typograph>
          </Button>
        </ModalContainer>
      </Modal>
      <Container>
        {
          isConnected ?
          <>
            <Input
              error={error && !isModalVisible}
              label='Pesquisar:'
              value={searchState}
              onEndEditing={() => {searchState && handleGetPosts();}}
              onChangeText={(text) => {setSearchState(text)}}
            />
            {
              notFoundSearch ? 
              <NotFoundResults>
                <Typograph color="text">Sem resultados da busca "{notFoundSearch}"</Typograph>
              </NotFoundResults>
                : <></>
            }
            <Button activeOpacity={0.75} onPress={() => {setIsModalVisible(true)}}>
              <Typograph>Abrir Modal</Typograph>
            </Button>
            {
              previewVisible &&
              <Card
                title={formatString(newTitleState, ['capitalize', 'ellipsis'], 40)}
                body={formatString(newBodyState, ['capitalize', 'ellipsis'], 40)}
              />
            }
            {
              isLoading ? <ActivityIndicator color='#ffcfff' style={{marginTop: 24}} size='large'/>
              : <CardList
                data={posts}
                renderItem={({item, index}: ListProps) => {
                  return <Card
                    key={index}
                    onPressTrash={() => {handleDelete(item.id)}}
                    onPressStar={() => {handleFavorite(setFavoriteState, item.id, setFavoriteLoading)}}
                    list
                    favorited={favoriteVerify(item.id, favoriteState)}
                    trashLoading={trashLoading === item.id}
                    favoriteLoading={favoriteLoading === item.id}
                    title={formatString(item.title, ['capitalize', 'ellipsis'], 40)}
                    body={formatString(item.body, ['capitalize', 'ellipsis'], 40)}
                  />
                }}
              />
            }
          </> :
          <Typograph>Sem conexão com a internet</Typograph>
        }
      </Container>
    </>
  )
}