import { PostRequest, PostResponse } from "../../interfaces/Posts";
import { api } from "../api";

class PostsService {
  async getPosts(text?: string) {
    if(text) {
      const data = await api.get<PostResponse[]>(`/posts?title=${text.toLowerCase()}`);
      console.log(data);
      return data.data;
    } else {
      const { data } = await api.get<PostResponse[]>('/posts');
      return data;
    }
  }
  async postPosts({body, title, idUser = 1}: PostRequest) {
    const { status } = await api.post<PostRequest>('/posts', {
      body,
      title,
      idUser
    });
    return status;
  }
  async deletePosts(id: number) {
    const { status } = await api.delete(`/posts/${id}`);
    console.log(status);
  }
}

export const postsService = new PostsService();