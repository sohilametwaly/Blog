import { MongoClient } from "mongodb";

export async function StoreMessage(message) {
  let client;
  try {
    client = await MongoClient.connect(
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.dpdqpka.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`
    );
    const db = client.db();
    try {
      await db.collection("messages").insertOne(message);
    } catch (err) {
      client.close();
      throw new Error("Couldn't Store to mongodb");
    }
    client.close();
  } catch (error) {
    throw new Error("Couldn't connect to mongodb");
  }
}
