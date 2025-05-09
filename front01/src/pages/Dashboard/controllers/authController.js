const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
require('dotenv').config();

exports.register = async (req, res) => {
  const { nome, email, senha, confirmacaoSenha } = req.body;

  if (!email.includes('@')) return res.status(400).json({ msg: 'Email inválido' });
  if (senha.length < 6) return res.status(400).json({ msg: 'Senha deve ter no mínimo 6 dígitos' });
  if (senha !== confirmacaoSenha) return res.status(400).json({ msg: 'Senhas não coincidem' });

  userModel.findUserByEmail(email, async (err, result) => {
    if (result.length > 0) return res.status(400).json({ msg: 'Email já cadastrado' });

    const hash = await bcrypt.hash(senha, 10);
    userModel.createUser(nome, email, hash, (err) => {
      if (err) return res.status(500).json({ msg: 'Erro ao cadastrar usuário' });
      res.status(201).json({ msg: 'Usuário criado com sucesso' });
    });
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;

  userModel.findUserByEmail(email, async (err, result) => {
    if (result.length === 0) return res.status(400).json({ msg: 'Usuário não encontrado' });

    const user = result[0];
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return res.status(401).json({ msg: 'Senha incorreta' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};
