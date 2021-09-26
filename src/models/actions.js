import openConnection from './default';
import {generateUUID} from '~src/util';

// person //////////////////////////////////////////////////////////////////////////////////////////
export const insertPerson = newPerson =>
  new Promise((resolve, reject) => {
    openConnection()
      .then(realm => {
        realm.write(() => {
          newPerson['id'] = generateUUID();
          let person = realm.create('person', newPerson);
          resolve(person);
        });
      })
      .catch(error => reject(error));
  });

export const loadPersons = () =>
  new Promise((resolve, reject) => {
    openConnection()
      .then(realm => {
        let persons = Array.from(realm.objects('person'));
        resolve(persons);
      })
      .catch(error => {
        reject(error);
      });
  });
