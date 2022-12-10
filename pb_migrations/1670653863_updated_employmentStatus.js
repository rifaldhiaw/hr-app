migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qf7yjs56mmjggq8")

  collection.name = "employmentStatuses"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qf7yjs56mmjggq8")

  collection.name = "employmentStatus"

  return dao.saveCollection(collection)
})
