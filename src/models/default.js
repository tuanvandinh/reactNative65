import Realm from 'realm';
import allSchemas0 from '~src/models/migrations/allSchemas0';

const SCHEMAS = [allSchemas0];

const openConnection = (path = Realm.defaultPath) => {
  // the first schema to update to is the current schema version
  // since the first schema in our array is at
  let nextSchemaIndex = Realm.schemaVersion(path);
  if (nextSchemaIndex === -1) {
    nextSchemaIndex = 0;
  }

  while (nextSchemaIndex + 1 < SCHEMAS.length) {
    nextSchemaIndex += 1;
    const migratedRealm = new Realm({
      path,
      ...SCHEMAS[nextSchemaIndex],
    });
    migratedRealm.close();
  }

  // open the Realm with the latest schema
  return Realm.open(SCHEMAS[SCHEMAS.length - 1]);
};

export default openConnection;
