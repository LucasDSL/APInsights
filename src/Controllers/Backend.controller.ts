import express from "express"
import Backend from "../Repositories/Backend.repository"

export default async function backendController(
  req: express.Request,
  res: express.Response
) {
  let results: Object[] = []
  try {
    const { id } = req.params
    if (id) {
      results = await Backend.getOneItem(id)
    } else {
      results = await Backend.getAllItems()
    }
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