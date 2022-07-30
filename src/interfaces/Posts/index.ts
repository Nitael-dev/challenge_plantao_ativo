export interface PostResponse {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface PostRequest {
  title: string;
  body: string;
  idUser: number;
}