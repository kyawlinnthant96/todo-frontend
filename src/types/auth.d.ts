export type LoginPayloadProps = {
  email: string;
  password: string;
};
export type LoginResponseProps = {
  status: string;
  token: string;
  data: {
    user: UserAuthResponseProp;
  };
};

export type UserAuthResponseProp = {
  _id: string;
  name: string;
  email: string;
  __v?: number;
};

export type RegisterPayloadProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type RegisterResponsePros = {
  status: string;
  token: string;
  data: {
    user: UserAuthResponseProp;
  };
};
