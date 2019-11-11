const UIController = (function(){
  domstrings = {
    storeContainer: '.store-frame',
    pageContainer: '.page-numbers'
  }

  return {
    clearStore: function() {
      document.querySelector(domstrings.storeContainer)
        .innerHTML = '';
    },

    addStoreItem: function(item, itemN) {
      document.querySelector(domstrings.storeContainer)
        .innerHTML += `
        <div class="store-item" key="${itemN}">
            <div class="item-pic" style={ background-image: ${item.img}}>
              <p class="reader">${item.alt}</p>
            </div>
            <p class="item-title">${item.name}</p>
            <p class="item-description">Scented Epsom Salt</p>
            <p class="item-price">${item.price}</p>
          </div>
        `;
    }
  }
}());

export default UIController;