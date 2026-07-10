document.getElementById("app").innerHTML = `
<header>
  <h1>🛍️ BurkiMarket</h1>
  <p>La marketplace du Burkina Faso</p>
</header>

<div class="container">
  <h2>Bienvenue sur BurkiMarket</h2>
  <p>La version professionnelle est en cours de construction.</p>

  <button id="btnAcheter">🛒 Acheter</button>
  <button id="btnVendre">🏪 Vendre</button>
</div>
`;

document.getElementById("btnAcheter").onclick = () => {
  alert("La page des produits arrive bientôt.");
};

document.getElementById("btnVendre").onclick = () => {
  alert("L'espace vendeur arrive bientôt.");
};
