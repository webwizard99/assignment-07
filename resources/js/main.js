import storeitems from './storeitems.js';
import UIController from './UIController.js';

let state = (function(UICTRL){
  let page = 1;
  let number = 20;

  let items = [];

  const renderItems = function() {
    items.forEach((item, itemN) => {
      UICTRL.addStoreItem(item, itemN);
    });
  }
  
  return {
    getPage: function() {
      return page;
    },

    renderPage: function(pageNumber) {
      UICTRL.clearStore();
      page = pageNumber;
      items = storeItems.getItems(page, number);
      renderItems();
    },

    setNumber: function(newNumber) {
      UICTRL.clearStore();
      const currentIndex = page * number;
      number = newNumber;
      // reset page number to keep viewer around the same
      // items they were looking at
      const newPage = Math.floor(currentIndex / number);
      page = newPage;
      items = storeItems.getItems(page, number);
    },

    init: function() {
      storeitems.initTestItems(40);
      items = storeitems.getItems(page, number);
      UICTRL.clearStore();
      renderItems();
    }
  }
}(UIController));

state.init();