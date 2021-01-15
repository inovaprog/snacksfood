function BotaoVoltar() {
    const estilo = {
        width: "100%",
        backgroundColor: "white",
        marginTop: "20px",

    }

    return (

        <div style={estilo}>
            <a href="../" style={{ textDecoration: "none" }}>Voltar</a>
        </div>
    )
}

function Main({ clientes }) {
    const mystyle = {
        backgroundColor: "#6E2D2C",
        padding: "20px",
        height: "100%",
        margin: 0,
        color: "white",
        height: "100%"
    };

    const estiloCliente = {
        backgroundColor: "#fff",
        color: "black",
        paddingTop: "20px"
    }

    console.log("CONSULTA TERMINADA OK")
    
    return (
        <div style={mystyle}>
            <center><h2>Lista de Clientes</h2></center>
            {clientes.map((cliente) => (
                <div style={estiloCliente}>
                    <center>{cliente.nome}</center>
                    <center style={{color: "red"}} >{cliente.qdtPontos} Pontos</center>
                    <center>Telefone: {cliente.telefone}</center>
                    <hr />
                </div>
            ))}
            <center><BotaoVoltar></BotaoVoltar></center>
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