import express from "express"
import GeneralReposiroty from "../Repositories/General.repository"

export async function getGeneralController(
  req: express.Request,
  res: express.Response
) {
  let results: Object[] = []
  const { id } = req.params
  try {
    if (id) {
      results = await GeneralReposiroty.getOneItem(id)
    } else {
      results = await GeneralReposiroty.getAllitems()
    }

    if (results.length === 0) {
      res.status(404).send({ error: "No items found, try POSTing a new item!" })
      return
    }
  } catch (error) {
    res.status(400).send({ error })
    return
  } finally {
    if (results) {
      res.send(results)
    }
    return
  }
}

export async function postGeneralController(
  req: express.Request,
  res: express.Response
) {
  let results: Object[] = []
  let { Category, Image_Link, Link, Description } = req.body
  const arrayItems = [Category, Image_Link, Link, Description]

  arrayItems.forEach(Item => {
    if (typeof Item !== typeof "") {
      res.status(400).send({
        error:
          "Not all items within body are strings or the name of one or more properties are written incorretly.",
      })
      return
    }
  })
  try {
    results = await GeneralReposiroty.postNewItem(arrayItems)
  } catch (error) {
    res.status(400).send({ error })
    return
  } finally {
    if (results) {
      res.json({ Message: "Item added successfully" })
    }
    return
  }
}
