import storeitems from './storeitems.js';
import UIController from './UIController.js';

let state = (function(UICTRL){
  let page = 1;
  let number = 20;

  let items = [];
  
  return {
    getPage: function() {
      return page;
    },

    init: function() {
      storeitems.initTestItems(40);
      items = storeitems.getItems(page, number);
      UICTRL.clearStore();
      items.forEach((item, itemN) => {
        UICTRL.addStoreItem(item, itemN);
      });
    }
  }
}(UIController));

state.init();