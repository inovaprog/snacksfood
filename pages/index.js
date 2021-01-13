import { connectToDatabase } from "../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const clientes = await db
        .collection("clientes")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    return (
        <div id="fundo">
            <div class="container">
                <div class="row">
                   <img src="images/logo.png"></img>
                        <div class="col-12 col-sm-3">
                            <a href="/lista.html"><button class="btn btn-light botao" style="width: 100%;"> LISTAR CLIENTES</button></a>
                        </div>

                        <div class="col-12 col-sm-3">
                            <button class="btn btn-light botao" style="width: 100%;"> ADICIONAR CLIENTE</button>
                        </div>

                        <div class="col-12 col-sm-3">
                            <button class="btn btn-light botao" style="width: 100%;"> ADICIONAR PONTOS</button>
                        </div>

                        <div class="col-12 col-sm-3">
                            <button class="btn btn-light botao" style="width: 100%;"> RESGATAR PONTOS</button>
                        </div>
                </div>
            </div>
        </div>
                
  )
};