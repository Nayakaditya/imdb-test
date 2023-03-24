const container = document.getElementById("container");
      const addBtn = document.getElementById("add-btn");
      const removeBtn = document.getElementById("remove-btn");

      const cardList = [];

      addBtn.addEventListener("click", addCardToDOM);
      function addCardToDOM() {
        const html = `<div class="card">
        <div class="price-container">
          <span class="price">$19</span>
          <span class="month-text">/Month</span>
        </div>
        <div class="details">
          <ul>
            <li>No Additional Charge</li>
            <li>Lifetime access</li>
            <li>35 Downloadable resources</li>
            <li>Ask Queries</li>
            <li>24/7 Available</li>
          </ul>
        </div>
      </div>`;

        container.innerHTML += html;
        cardList.push(html);
        console.log(`You have ${cardList.length} cards`);
      }
      console.log(cardList);

      removeBtn.addEventListener("click", removeCardFromArray);
      function removeCardFromArray() {
        if (cardList.length <= 0) {
          console.log("Container is empty now");
          return;
        }

        console.log(`You have ${cardList.length - 1} cards left`);
        cardList.pop();
      }