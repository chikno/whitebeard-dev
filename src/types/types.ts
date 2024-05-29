export type AuthStatus = {
    success: boolean;
    err?: {
      message: string;
    };
    token: string;
  };
  