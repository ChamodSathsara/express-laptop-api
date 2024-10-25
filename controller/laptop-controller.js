// ================================================ Mongodb client ======================
const { MongoClient, ObjectId } = require("mongodb");

// Connection URL =================================================== takeby : expressjs > database distr.. >mongodb>github
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name  =================================================== takeby : expressjs > database distr.. >mongodb>github
const dbName = "laptop";
const db = client.db(dbName);
const collection = db.collection("laptops");

// Axios=============================================================================== Save
const saveLaptop = async (req, res) => {
  console.log(req.body);
  const insertResult = await collection.insertOne(req.body);
  res.send(insertResult);
};

// Axios=============================================================================== get
const getLaptop = async (req, res) => {
  const findResult = await collection.find({}).toArray();
  res.send(findResult);
};

// Axios=============================================================================== delete
const deleteLaptop = async (req, res) => {
  const deleteResult = await collection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.send(deleteResult);
};

// Axios=============================================================================== update
const updateLaptop = async (req, res) => {
  const updateResult = await collection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(updateResult);
};

module.exports = { saveLaptop, getLaptop, deleteLaptop, updateLaptop };
