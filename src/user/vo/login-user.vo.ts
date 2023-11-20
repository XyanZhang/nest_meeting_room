interface UserInfo {
  id: number;

  username: string;

  nickName: string;

  email: string;

  headPic: string;

  phoneNumber: string;

  isFrozen: boolean;

  isAdmin: boolean;

  createTime: number;

  roles: string[];

  permissions: string[]
}
// dto 是接收参数的

// vo 是封装返回的数据
export class LoginUserVo {

  userInfo: UserInfo;

  accessToken: string;

  refreshToken: string;
}

