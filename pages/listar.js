function Main({ clientes }) {
    
    console.log("CONSULTA TERMINADA OK")
    
    return (
        <div>
            <center><h2>Lista de Clientes</h2></center>
            {clientes.map((cliente) => (
                <div className="nome">
                    <center><p>{cliente.nome}</p></center>
                    <center><p>{cliente.qdtPontos} Pontos</p></center>
                    <center><p>Telefone: {cliente.telefone}</p></center>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps() {

   
        const res = await fetch('https://snacksfood.vercel.app/api/list_clientes')
        console.log("BANCO OK")
        const clientes = await res.json()
        return {
            props: {
                clientes,
            },
        }
    

 
}

export default Main