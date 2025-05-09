const db = require('../config/db');

// Criar evento
exports.createEvento = (segmento, titulo, descricao, foto, valor, endereco, callback) => {
  const sql = 'INSERT INTO eventos (segmento, titulo, descricao, foto, valor, endereco) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [segmento, titulo, descricao, foto, valor, endereco], callback);
};

// Listar todos os eventos
exports.getAllEventos = (callback) => {
  const sql = 'SELECT * FROM eventos';
  db.query(sql, callback);
};

// Buscar evento por ID
exports.getEventoById = (id, callback) => {
  const sql = 'SELECT * FROM eventos WHERE id = ?';
  db.query(sql, [id], callback);
};

// Atualizar evento
exports.updateEvento = (id, segmento, titulo, descricao, foto, valor, endereco, callback) => {
  const sql = 'UPDATE eventos SET segmento = ?, titulo = ?, descricao = ?, foto = ?, valor = ?, endereco = ? WHERE id = ?';
  db.query(sql, [segmento, titulo, descricao, foto, valor, endereco, id], callback);
};

// Deletar evento
exports.deleteEvento = (id, callback) => {
  const sql = 'DELETE FROM eventos WHERE id = ?';
  db.query(sql, [id], callback);
};
