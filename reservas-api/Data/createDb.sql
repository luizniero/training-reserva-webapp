USE db_reservas;

-- Tabela de Usuários
CREATE TABLE Usuarios (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100),
    cpf NVARCHAR(14) NOT NULL UNIQUE,
    SenhaHash NVARCHAR(255) NOT NULL,
    Perfil NVARCHAR(50) NOT NULL  -- Pode ser 'admin' ou 'user'
);

-- Tabela de Salas
CREATE TABLE Salas (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100) NOT NULL
);

-- Tabela de Equipamentos
CREATE TABLE Equipamentos (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100) NOT NULL,
    QuantidadeDisponivel INT NOT NULL
);

-- Tabela de Reservas
CREATE TABLE Reservas (
    Id INT PRIMARY KEY IDENTITY(1,1),
    UsuarioId INT FOREIGN KEY REFERENCES Usuarios(Id),
    SalaId INT FOREIGN KEY REFERENCES Salas(Id),
    Data DATE NOT NULL,
    Horario TIME NOT NULL,
    Status NVARCHAR(50) NOT NULL DEFAULT 'Ativa',
    CONSTRAINT CK_Status CHECK (Status IN ('Ativa', 'Cancelada', 'Montada'))
);

-- Tabela associativa para Reserva de Equipamentos
CREATE TABLE ReservaEquipamentos (
    ReservaId INT FOREIGN KEY REFERENCES Reservas(Id),
    EquipamentoId INT FOREIGN KEY REFERENCES Equipamentos(Id),
    Quantidade INT NOT NULL,
    PRIMARY KEY (ReservaId, EquipamentoId)
);
