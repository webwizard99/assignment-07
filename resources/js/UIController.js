const UIController = (function(){
  const domstrings = {
    storeContainer: '.store-frame',
    pageContainer: '.page-numbers'
  }

  return {
    getDomStrings: function() {
      return domstrings;
    },

    clearStore: function() {
      document.querySelector(domstrings.storeContainer)
        .innerHTML = '';
    },

    addStoreItem: function(item, itemN) {
      const newItem = `
      <div class="store-item" key="${itemN}">
          <div class="item-pic" style={ background-image: ${item.img}}>
            <p class="reader">${item.alt}</p>
          </div>
          <p class="item-title">${item.name}</p>
          <p class="item-description">Scented Epsom Salt</p>
          <p class="item-price">${item.price}</p>
        </div>
      `;
      document.querySelector(domstrings.storeContainer)
        .insertAdjacentHTML("beforeend", newItem);
    },

    clearPageNumbers: function() {
      document.querySelector(domstrings.pageContainer)
        .innerHTML = '';
    },

    renderPageNumbers: function(current, numbers) {
      const pageContainer = document.querySelector(domstrings.pageContainer);
      numbers.forEach((num, numIndex) => {
        let pageNum = '';
        if (num == current) {
          pageNum = `<li><a class="page-num current-page-num" key="${numIndex}" data-page="${num}">${num}</a></li>`
        } else {
          pageNum = `<li><a class="page-num" key="${numIndex}" data-page="${num}">${num}</a></li>`
        }
        pageContainer.insertAdjacentHTML("beforeend", pageNum);
      })
    }
  }
}());

// <li><a key="1" data-page="1">1</a></li>

export default UIController;