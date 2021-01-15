import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const {
    query: { parametros },
  } = req

  const { db } = await connectToDatabase();

  var telefone = parametros[0]
  var qtdPontos = parseInt(parametros[1])
  

  const user = await db
    .collection("clientes")
    .find({ telefone: telefone })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  if (user.length == 0) {

    res.send(201)
  } else {
    
    await db.collection("clientes").updateOne(
        {"telefone": telefone},
        { $inc: { "qdtPontos":  qtdPontos*-1}}
     )
     res.send(200);

  }

};