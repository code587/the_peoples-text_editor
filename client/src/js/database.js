import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    }
  });

// Adding content to the database
export const putDb = async (content) => {
  console.log('put to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const stash = tx.objectStore('jate');
  const request = stash.put({ jate: content });
  const finding = await request;
  console.log('data saved to the database', finding);
  
  console.error('putDb not implemented');
}


//  Gettng all content from the database
export const getAllDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const stash = tx.objectStore('jate');
  const request = stash.get(1);
  const finding = await request;
  console.log('result.value', finding);
  return finding;

console.error('getAllDb not implemented');
};

initdb();
