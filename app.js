window.onload = function() {
    //write your code here
    const card = document.querySelector("#carta");
    const topSuit = document.querySelector("#topSuit");
    const value = document.querySelector(".value");
    const bottomSuit = document.querySelector("#bottomSuit");
    const boton = document.querySelector("#boton");
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    let cardValue = null;
    let randomSuit = null;
    boton.addEventListener("click", insertSuit);
    function insertSuit() {
      randomSuit = Math.floor(Math.random() * suits.length);
      cardValue = Math.floor(Math.random() * 10 + 2);
      if (suits[randomSuit] === "hearts") {
        card.classList.add("hearts");
        card.classList.remove("spades", "clubs", "diamonds");
        topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="hearts p-0">♥</p></div>`;
        value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
        bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="hearts p-0">♥</p></div>`;
      } else if (suits[randomSuit] === "spades") {
        card.classList.add("spades");
        card.classList.remove("hearts", "clubs", "diamonds");
        topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="spades mt-n3 p-0">♠</p></div>`;
        value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
        bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="spades mt-n3 p-0">♠</p></div>`;
      } else if (suits[randomSuit] === "clubs") {
        card.classList.add("clubs");
        card.classList.remove("spades", "hearts", "diamonds");
        topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="clubs mt-n3 p-0">♣</p></div>`;
        value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
        bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="clubs mt-n3 p-0">♣</p></div>`;
      } else if (suits[randomSuit] === "diamonds") {
        card.classList.add("diamonds");
        card.classList.remove("spades", "clubs", "hearts");
        topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="diamonds mt-n3 p-0">♦</p></div>`;
        value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
        bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="diamonds mt-n3 p-0">♦</p></div>`;
      }
    }
    insertSuit();
    setInterval(insertSuit, 10000);
  };
  