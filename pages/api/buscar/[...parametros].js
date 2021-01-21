import { connectToDatabase } from "../../../util/mongodb";


export default async (req, res) => {
  const {
    query: { parametros },
  } = req

  var telefone = parametros[0]



  console.log("consultar Banco....")

  const { db } = await connectToDatabase();

  const clientes = await db
    .collection("clientes")
    .find({ "telefone": telefone })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  console.log("BANCO OK")
  res.json(clientes);




};