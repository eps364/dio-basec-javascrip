let name = "Super";
let xp = 0;
let nivel = "Ferro";

for (i = 0; i < 10; i++) {
  xp = i * 1000;

  if (xp <= 1000) nivel = "Ferro";
  else if (xp <= 2000) nivel = "Bronze";
  else if (xp <= 3000) nivel = "Prata";
  else if (xp <= 4000) nivel = "Ouro";
  else if (xp <= 5000) nivel = "Platina";
  else if (xp <= 6000) nivel = "Ascendente";
  else if (xp <= 7000) nivel = "Imortal";
  else if (xp <= 8000) nivel = "Radiante";
  ("Bronze");

  console.log(
    "Teste: O Herói de nome " +
      name +
      " está no nível " +
      nivel +
      " com " +
      xp +
      " de XP"
  );
}
