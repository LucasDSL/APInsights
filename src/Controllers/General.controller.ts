import express from "express"
import GeneralReposiroty from "../Repositories/General.reposiroty"

export async function getGeneralController(
  req: express.Request,
  res: express.Response
) {
  let results: Object[] = []
  try {
    results = await GeneralReposiroty.getAllitems()
    if (results.length !== 0) {
      res.status(404).send({ error: "No items found, try POSTing a new item!" })
      return
    }
  } catch (error) {
    res.status(400).send({ error })
    return
  } finally {
    if (results) {
      return results
    }
  }
}

export async function postGeneralController(
  req: express.Request,
  res: express.Response
) {

}