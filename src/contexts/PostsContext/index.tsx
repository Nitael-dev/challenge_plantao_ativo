import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useState } from "react";
import { Alert } from "react-native";
import { handleFavorite } from "../../handlers/Home";
import { PostRequest, PostResponse } from "../../interfaces/Posts";
import { postsService } from "../../services/Posts/index.service";

interface PostsContextProps {
  posts: PostResponse[];
  setPosts: React.Dispatch<React.SetStateAction<PostResponse[]>>;
  getPosts: (search?: string) => Promise< -1 | void >;
  postPosts: (props: PostRequest) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
}

interface PostsProviderProps {
  children: React.ReactNode;
}

const PostsContext = createContext({} as PostsContextProps);

export const PostsProvider = ({children}: PostsProviderProps) => {
  const [posts, setPosts] = useState<PostResponse[]>([]);

  const getPosts = useCallback(async (search?: string) => {
    try {
      const data = await postsService.getPosts(search);
      if(data.length > 0) {
        setPosts(data);
      } else {
        const data = await postsService.getPosts();
        setPosts(data);
        return -1;
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Ops!',
        'Serviço indisponível temporariamente. Tente mais tarde.'
      );
    }
  },[])

  const postPosts = useCallback(async ({body, idUser = 1, title}: PostRequest) => {
    try {
      await postsService.postPosts({body, idUser, title});
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Ops!',
        'Serviço indisponível temporariamente. Tente mais tarde.'
      );
    }
  },[])

  const deletePost = useCallback(async (id: number) => {
    try {
      await postsService.deletePosts(id);
      handleFavorite(undefined, id)
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Ops!',
        'Serviço indisponível temporariamente. Tente mais tarde.'
      );
    }
  },[])

  return (
    <PostsContext.Provider value={{
      posts,
      setPosts,
      getPosts,
      postPosts,
      deletePost
    }}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext);