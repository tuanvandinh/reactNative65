// Define your models and their properties
export const PersonSchema = {
  name: 'person',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true}, // primary key
    //    subscriptions: {type: 'list', objectType: 'subscription'},
    //    configs: {type: 'list', objectType: 'configs'},
    //    checks: {
    //      type: 'linkingObjects',
    //      objectType: 'check',
    //      property: 'persons',
    //    },
    email: {type: 'string', default: ''},
    password: {type: 'string'},
    user_token: {type: 'string'},
    first_name: {type: 'string', indexed: true},
    last_name: {type: 'string', indexed: true},
    user_name: {type: 'string'},
    admin: {type: 'bool', default: false},
    contact: {type: 'string', default: ''},
    address: {type: 'string', default: ''},
    phone: {type: 'string', default: ''},
    offline_mode: {type: 'bool', default: false},
    reg_date: {type: 'date', default: new Date()},
    approval_date: {type: 'date', default: new Date()},
    approval_code: {type: 'string', default: ''},
    create_date: {type: 'date', default: new Date()},
    modify_date: {type: 'date', default: new Date()},
  },
};

class Sequence {
  next() {
    this.value = this.value + 1;
    return this.value;
  }
}
Sequence.schema = {
  name: 'Sequence',
  primaryKey: 'name',
  properties: {
    name: 'string',
    value: 'int',
  },
};

const version = 0;

const databaseOptions = {
  //  path: 'default.realm',
  schema: [Sequence, PersonSchema],
  schemaVersion: version,
};

export default databaseOptions;
