interface Locals {
  Authenticated: boolean;
  UserId: string;
}

declare module 'express' {
  export interface Response  {
    locals: Locals;
  }
}