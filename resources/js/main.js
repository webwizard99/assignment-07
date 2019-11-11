import storeitems from './storeitems.js';

let state = (function(){
  let page = 1;
  let number = 20;
  
  return {
    getPage: function() {
      return page;
    },
    
    init: function() {
      storeitems.initTestItems(40);
      const items = storeitems.getItems(page, number);
      const storeFrame = document.querySelector('.store-frame');
      items.forEach((item, itemN) => {
        storeFrame.innerHTML += `
        <div class="store-item" key="${itemN}">
            <div class="item-pic" style={ background-image: ${item.img}}>
              <p class="reader">${item.alt}</p>
            </div>
            <p class="item-title">${item.name}</p>
            <p class="item-description">Scented Epsom Salt</p>
            <p class="item-price">${item.price}</p>
          </div>
        `
      });
    }
  }
}());

state.init();