const storeitems = (function(){
  let items = [];

  const item = function(img, alt, name, price) {
    this.img = img;
    this.alt = alt;
    this.name = name;
    this.price = price;
  }

  const flavors = [ 'Mint', 'Peppermint', 'Frankincense', 'Lavender', 'Tea Tree', 'Lemon', 'Sage', 'Clove'];

  return {
    getItems: function() {
      return items;
    },

    setItems: function(newItems) {
      items = newItems;
    },

    initTestItems: function(n) {
      // if (items != []) return;
      for (let i = 0; i < n; i++) {
        let flavor = Math.floor(Math.random() * flavors.length);
        let cost = (Math.random() * 2) + 4;
        let newItem = new item('../media/joanna-kosinska-Prfs32wh-o4-unsplash.jpg', 'A spoon-full of salt', `${flavors[flavor]} Salt`, `$${cost.toFixed(2)}`);
        items.push(newItem);
      }
      
    }

  }
}());
export default storeitems;