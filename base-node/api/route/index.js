const ItemList = require("../controller/index");

const routers = (app) => {
    app.route("/item").get(ItemList.getItem).post(ItemList.addItem);
    app.route("/item/:id").delete(ItemList.deleteItem).put(ItemList.updateItem);
    app.route("/item/search").get(ItemList.searchItem)
    app.route("/item/paginate").get(ItemList.paginateItem)
  };

module.exports = routers