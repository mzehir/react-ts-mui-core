export interface getPostByIdResponseDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}
//********************************** */
export interface getPostsResponseDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}
//********************************** */
export interface createPostResponseDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export interface createPostRequestDto {
  title: string;
  body: string;
  userId: number;
}
//********************************** */
export interface updatePostResponseDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface updatePostRequestDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}
//********************************** */
export interface patchPostResponseDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface patchPostRequestDto {
  id: number;
  title?: string;
  body?: string;
  userId?: number;
}
//********************************** */
export interface getPostsByUserResponseDto {
  id: number;
  title: string;
  body: string;
  userId: number;
}
