import storeitems from './storeitems.js';
import UIController from './UIController.js';

let state = (function(UICTRL){
  let page = 1;
  let number = 20;

  const testData = 80;

  let items = [];

  const setEventListeners = function() {
    const DOM = UICTRL.getDomStrings();

    document.querySelector(DOM.pageContainer)
      .addEventListener('click', handlePageNumber);
  }

  const handlePageNumber = function(e) {
    console.log('handlePageNumber', e.target);
    if (!e.target.classList.contains('page-num')) return;

    const newPage = e.target.getAttribute('data-page');
    renderPage(newPage);
    renderPageNumbers();
  }

  const renderItems = function() {
    items.forEach((item, itemN) => {
      UICTRL.addStoreItem(item, itemN);
    });
  }

  const renderPageNumbers = function() {
    const total = storeitems.getItemsLength();
    const maxPages = Math.ceil(total / number);
    let renderPages = [];
    if (maxPages <= 5) {
      for (let i = 1; i <= maxPages; i++) {
        renderPages.push(i);
      }
    }
    UICTRL.clearPageNumbers();
    UICTRL.renderPageNumbers(page, renderPages);
  }

  const renderPage = function(pageNumber) {
    UICTRL.clearStore();
    page = pageNumber;
    items = storeItems.getItems(page, number);
    renderItems();
    renderPageNumbers();
  }
  
  return {
    getPage: function() {
      return page;
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
      setEventListeners();
      storeitems.initTestItems(testData);
      items = storeitems.getItems(page, number);
      UICTRL.clearStore();
      renderItems();
      renderPageNumbers();
    }
  }
}(UIController));

state.init();