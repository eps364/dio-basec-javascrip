let name = "Super";
let xp = 1000;
let nivel = "Ferro";

if (xp <= 2000) nivel = "Ferro";
else if (xp > 2000) nivel = "Bronze";
else if (xp > 3000) nivel = "Prata";
else if (xp > 4000) nivel = "Ouro";
else if (xp > 5000) nivel = "Platina";
else if (xp > 6000) nivel = "Ascendente";
else if (xp > 7000) nivel = "Imortal";
else xp = "Bronze";

console.log(
  "O Herói de nome " +
    name +
    " está no nível " +
    nivel +
    " com " +
    xp +
    " de XP"
);
