const mysql = require("mysql2");
let x = 0;
let y = Number();

let value;
let idSensor;

let poolBancoDados = mysql
  .createPool({
    host: "127.0.0.1",
    user: "Vitalis",
    password: "Caju#2024",
    database: "woodtech",
    port: 3307,
  })
.promise();


// create table medida (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
// 	dht11_umidade DECIMAL,
// 	chave TINYINT,
// 	momento DATETIME,
// 	fk_galpao INT,
// 	FOREIGN KEY (fk_galpao) REFERENCES galpao(id)
// );


async function asyncCall() {
  value = waveFunc();

  await poolBancoDados.execute(
    "INSERT INTO medida (fk_galpao, dht11_umidade) VALUES (?, ?)",
    [idSensor, value]
  );

  console.log(`Inserido -> ID ARMAZEM: ${idSensor}, Valor: ${value}`);
}

function waveFunc() {
  idSensor = pickRandom();
  x += 0.025;
  y = Math.sin(x) * 25 + 25;

  return Math.abs(y);
}

function pickRandom() {
  const nums = Array.from({ length: 8 }, (_, i) => i + 1);
  const randomIndex = Math.floor(Math.random() * nums.length);

  return nums[randomIndex];
}


setInterval(() => {
  
    asyncCall().catch(console.error);
  
}, 20);