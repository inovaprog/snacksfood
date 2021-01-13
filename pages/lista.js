function Main({ clientes }) {
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

export async function getStaticProps() {

    const res = await fetch('https://snacksfood.vercel.app/api/list_clientes')
    const clientes = await res.json()
    
    return {
        props: {
            clientes,
        },
    }
}

export default Main