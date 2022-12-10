migrate((db) => {
  const collection = new Collection({
    "id": "bv4gy7knqsxfx4w",
    "created": "2022-12-10 06:28:23.008Z",
    "updated": "2022-12-10 06:28:23.008Z",
    "name": "companies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zhivfbrl",
        "name": "name",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("bv4gy7knqsxfx4w");

  return dao.deleteCollection(collection);
})
