import express from "express"
import Backend from "../Repositories/Backend"

export const back_getOneItem = async (
  req: express.Request,
  res: express.Response
) => {
  let results: Object[] = []
  try {
    const { id } = req.params
    results = await Backend.getOneItem(id)
    if (results.length === 0) {
      res.status(404).send({ error: "No items found." })
      return
    }
  } catch (error) {
    res.status(400).send(error)
    return 
  } finally {
    if (results) {
      res.send(results)
    }
    return
  }
}

export const back_getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let results: Object[] = []
  try {
    results = await Backend.getAllItems()
    if (results.length === 0) {
      res.status(404).send({ error: "No items found." })
      return
    }
  } catch (error) {
    res.status(400).send(error)
    return 
  } finally {
    if (results) {
      res.send(results)
    }
    return
  }
}
