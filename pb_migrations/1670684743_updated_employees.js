migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s6pwjgy7",
    "name": "joinDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  // remove
  collection.schema.removeField("s6pwjgy7")

  return dao.saveCollection(collection)
})
