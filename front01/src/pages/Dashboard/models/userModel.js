const db = require('../config/db');

exports.createUser = (nome, email, senhaHash, callback) => {
  const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senhaHash], callback);
};

exports.findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM usuario WHERE email = ?';
  db.query(sql, [email], callback);
};
