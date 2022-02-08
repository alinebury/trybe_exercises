const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return error;
  }
};

window.onload = async () => {
  const coins = await fetchCoins();
  const coinsList = document.getElementById('coins-list');
  
  coins.forEach((coin) => {
    const newLi = document.createElement('li');
  
    newLi.innerText = `Nome: ${coin.name}\nSímbolo: ${coin.symbol}\nPreço: ${coin.priceUsd}`;
    coinsList.appendChild(newLi);
  });
}