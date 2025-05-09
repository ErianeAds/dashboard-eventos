const eventosModel = require('../models/eventosModel');

// Criar evento
exports.createEvento = (req, res) => {
  const { segmento, titulo, descricao, foto, valor, endereco } = req.body;

  if (!segmento || !titulo || !descricao || !foto || !valor || !endereco) {
    return res.status(400).json({ msg: 'Todos os campos são obrigatórios!' });
  }

  eventosModel.createEvento(segmento, titulo, descricao, foto, valor, endereco, (err) => {
    if (err) return res.status(500).json({ msg: 'Erro ao criar evento' });
    res.status(201).json({ msg: 'Evento criado com sucesso' });
  });
};

// Listar eventos
exports.getAllEventos = (req, res) => {
  eventosModel.getAllEventos((err, result) => {
    if (err) return res.status(500).json({ msg: 'Erro ao buscar eventos' });
    res.status(200).json(result);
  });
};

// Buscar evento por ID
exports.getEventoById = (req, res) => {
  const { id } = req.params;
  
  eventosModel.getEventoById(id, (err, result) => {
    if (err) return res.status(500).json({ msg: 'Erro ao buscar evento' });
    if (result.length === 0) return res.status(404).json({ msg: 'Evento não encontrado' });
    res.status(200).json(result[0]);
  });
};

// Atualizar evento
exports.updateEvento = (req, res) => {
  const { id } = req.params;
  const { segmento, titulo, descricao, foto, valor, endereco } = req.body;

  if (!segmento || !titulo || !descricao || !foto || !valor || !endereco) {
    return res.status(400).json({ msg: 'Todos os campos são obrigatórios!' });
  }

  eventosModel.updateEvento(id, segmento, titulo, descricao, foto, valor, endereco, (err) => {
    if (err) return res.status(500).json({ msg: 'Erro ao atualizar evento' });
    res.status(200).json({ msg: 'Evento atualizado com sucesso' });
  });
};

// Deletar evento
exports.deleteEvento = (req, res) => {
  const { id } = req.params;

  eventosModel.deleteEvento(id, (err) => {
    if (err) return res.status(500).json({ msg: 'Erro ao deletar evento' });
    res.status(200).json({ msg: 'Evento deletado com sucesso' });
  });
};
