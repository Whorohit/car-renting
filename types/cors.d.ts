declare module 'cors' {
    import { Request, Response, NextFunction } from 'express';
  
    interface CorsOptions {
      origin?: boolean | string | RegExp | (string | RegExp)[] | ((origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void);
      methods?: string | string[];
      allowedHeaders?: string | string[];
      exposedHeaders?: string | string[];
      credentials?: boolean;
      maxAge?: number;
      preflightContinue?: boolean;
      optionsSuccessStatus?: number;
    }
  
    type CorsRequest = Request;
  
    interface CorsResponse extends Response {}
  
    interface CorsNextFunction extends NextFunction {}
  
    function cors(options?: CorsOptions): (req: CorsRequest, res: CorsResponse, next: CorsNextFunction) => void;
  
    namespace cors {
      export type Options = CorsOptions;
      export type Request = CorsRequest;
      export type Response = CorsResponse;
      export type NextFunction = CorsNextFunction;
    }
  
    export = cors;
  }
  