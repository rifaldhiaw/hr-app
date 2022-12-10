migrate((db) => {
  const collection = new Collection({
    "id": "0fve94oaoprlw0s",
    "created": "2022-12-10 06:28:37.936Z",
    "updated": "2022-12-10 06:28:37.936Z",
    "name": "departments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "irjveyap",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0fve94oaoprlw0s");

  return dao.deleteCollection(collection);
})
