const btn = document.getElementById("btn");
const imgDiv = document.getElementById("imgDiv");
const getSuperhero = (id) => {
  console.log("clicked", random());
  fetch(`https://superheroapi.com/api.php/812324046574133/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const stats = getStatsHTML(json);
      heroName.innerText = json.name;
      imgDiv.innerHTML = `<img src = "${json.image.url}" width=200px height=200px/> ${stats}`;
    });
};
const statToEmoji = {
  intelligence: "⚡",
  speed: "⚡",
  strength: "⚡",
  power: "⚡",
  combat: "⚡",
  durability: "⚡",
};
const getStatsHTML = (character) => {
  const stats = Object.keys(character["powerstats"]).map((s) => {
    return `<p>${statToEmoji[s]}${s}: ${character.powerstats[s]}</p>`;
  });
  console.log(stats.join(""));
  return stats.join("");
};
const random = () => {
  return Math.floor(Math.random() * 731) + 1;
};

btn.onclick = () => getSuperhero(random());

const buttonSearch = document.getElementById("buttonSearch");
const inputSearch = document.getElementById("inputSearch");
const heroName = document.getElementById("heroName");

const searchSuperHero = (name) => {
  fetch(`https://superheroapi.com/api.php/812324046574133//search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.results[0].powerstats.intelligence);
      const powerStats = `<p>Intelligence:${json.results[0].powerstats.intelligence}</p>`;
      heroName.innerText = json.results[0].name;
      imgDiv.innerHTML = `<img src = "${json.results[0].image.url}" width=150px height=150px/> ${powerStats}`;
    });
};
buttonSearch.onclick = () => searchSuperHero(inputSearch.value);
