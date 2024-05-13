
  // Create the table if it doesn't exist
  export const creatTable = (db)=>{
    db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT);',
          [],
          () => console.log('Table created successfully'),
          error => console.error('Error creating table: ', error)
        );
      });
  }
// Insert data into the table
  export const insertData = (db)=>{
    db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO users (name, email) VALUES (?, ?);',
          ['John Doe', 'john@example.com'],
          () => console.log('Data inserted successfully'),
          error => console.error('Error inserting data: ', error)
        );
      });
  }
  

  // Retrieve data from the table
export const retrieveData = (db)=>{
    db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users;',
          [],
          (_, { rows }) => {
            console.log('Retrieved data:');
            rows._array.forEach(row => {
              console.log(row);
            });
          },
          error => console.error('Error retrieving data: ', error)
        );
      });
}
