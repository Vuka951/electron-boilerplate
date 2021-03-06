// Remove later used to generate the database
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database.sqlite3');

db.serialize(function() {
  db.run('CREATE TABLE lorem (info TEXT)');

  let stmt = db.prepare('INSERT INTO lorem VALUES (?)');
  for (let i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i);
  }
  stmt.finalize();

  db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
    console.log(row.id + ': ' + row.info);
  });
});

db.close();
