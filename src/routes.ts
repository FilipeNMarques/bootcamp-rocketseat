import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'Filipe Marques',
    email: 'filipenmarques1@gmail.com',
    password: '123456',
    techs: ['Node.JS', 'ReactJS', 'React Native', {
      title: 'Javascript',
      experience: 100
    }]
  } );
  return res.status(200).json(user)
}