import type { Request, Response } from 'express'

export interface IUserController {
  create: (req: Request, res: Response) => Promise<Response>
  getUser: (req: Request, res: Response) => Promise<Response>
  getAll: (req: Request, res: Response) => Promise<Response>
  update: (req: Request, res: Response) => Promise<Response>
  delete: (req: Request, res: Response) => Promise<Response>
}
