declare namespace Express {
  export interface Request {
    token: string;
    user: {
      id: number,
      name: string,
      admin: boolean,
    }
  }
  export interface Response {
    token: string;
    user: {
      id: number,
      name: string,
      admin: boolean,
    }
  }
}