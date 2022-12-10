migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w8izn3ur",
    "name": "companyId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "bv4gy7knqsxfx4w",
      "cascadeDelete": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djbdb2lp",
    "name": "deparmentId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "0fve94oaoprlw0s",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w8izn3ur",
    "name": "company",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "bv4gy7knqsxfx4w",
      "cascadeDelete": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djbdb2lp",
    "name": "deparment",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "0fve94oaoprlw0s",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
