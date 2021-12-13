import express from "express"

export const getOneItem = (
  req: express.Request, res: express.Response, next : express.NextFunction) => 
{
  return res.send(400).json({one: 'one'})
}

export const getAllItems = 
(req: express.Request, res: express.Response, next : express.NextFunction) => {
  return res.send(200).json({ sim: "sim" })
}
