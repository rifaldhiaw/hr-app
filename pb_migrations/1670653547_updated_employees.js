migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8qw38bzb",
    "name": "birthDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktgrkj9m",
    "name": "gender",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "male",
        "female"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0pu68m8k",
    "name": "phoneNumber",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "(\\d{3})\\D*(\\d{3})\\D*(\\d{4})"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  // remove
  collection.schema.removeField("8qw38bzb")

  // remove
  collection.schema.removeField("ktgrkj9m")

  // remove
  collection.schema.removeField("0pu68m8k")

  return dao.saveCollection(collection)
})
