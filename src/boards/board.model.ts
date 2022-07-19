export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// 지정한 상태만 나올 수 있도록 enum(eration) 사용
export enum BoardStatus {
  PUBLIC = 'PUBLIC',  // 공개 게시물
  PRIVATE = 'PRIVATE'  // 비공개 게시물
}