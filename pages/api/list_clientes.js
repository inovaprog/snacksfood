import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const clientes = await db
    .collection("clientes")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(clientes);
};