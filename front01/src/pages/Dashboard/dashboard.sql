CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(255)
);

CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  segmento VARCHAR(50),
  titulo VARCHAR(100),
  descricao TEXT,
  foto VARCHAR(255),
  valor DECIMAL(10,2),
  endereco VARCHAR(255)
);
