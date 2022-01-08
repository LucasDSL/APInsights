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
  let { Title, Category, Image_Link, Link, Description } = req.body
  const arrayItems = [Title, Category, Description, Image_Link, Link]

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

export async function deleteGeneralController(
  req: express.Request,
  res: express.Response
) {
  let results = []
  const { id } = req.params
  try {
    results = await GeneralReposiroty.deleteItem(id)
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "No items with given id found." })
      return
    }
  } catch (err) {
    res.status(400).json({ err: "No items with given id found" })
    return
  } finally {
    if (results.affectedRows !== 0) {
      res.status(200).json({ Message: `item with id ${id} deleted` })
    }
    return
  }
}
