// lib/init-middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: '*', // Adjust this to restrict allowed origins
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware: any) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const corsMiddleware = initMiddleware(cors);
