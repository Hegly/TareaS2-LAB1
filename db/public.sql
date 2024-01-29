-- Active: 1705534014031@@localhost@5432@api_invernadero@public
create table tbl_planta
(
    id serial primary key , 
    nombre varchar(500),
    tipo varchar(500),
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_planta
(nombre, tipo)
VALUES
('Margaritas', 'Ornamental'),
('Mango', 'Frutal'),
('Zacate de Limón', 'Medicinal');

SELECT*FROM tbl_planta 