const ConnectToMongoDB = require("../utils/mongo-connection");

//Get

async function get() {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise((res, rej) => {
    const result = db.collection("products").find({}).toArray();
    res(result);
  });
}

const ProductModel = {
  get,
};

module.exports = ProductModel;
