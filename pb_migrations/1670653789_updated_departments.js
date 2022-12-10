migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0fve94oaoprlw0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i3lvae5g",
    "name": "company",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "bv4gy7knqsxfx4w",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0fve94oaoprlw0s")

  // remove
  collection.schema.removeField("i3lvae5g")

  return dao.saveCollection(collection)
})
