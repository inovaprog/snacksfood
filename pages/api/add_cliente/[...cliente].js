import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const {
    query: { cliente },
  } = req

  const { db } = await connectToDatabase();

  var nomeUser = cliente[0]
  var telefoneUser = cliente[1]
  

  const user = await db
    .collection("clientes")
    .find({ telefone: cliente[1] })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  if (user.length == 0) {
    await db.collection("clientes").insertOne(
      {
        nome: nomeUser,
        telefone: telefoneUser,
        qdtPontos: 0
      })


    res.send(200);
  } else {
    res.send(301);
  }

};