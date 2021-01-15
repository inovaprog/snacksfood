import Image from 'next/image'
import Link from 'next/link'


function Botao(props) {
    const texto = props.children
    const botao = {
        marginTop: "20px",
        backgroundColor: "white",
        padding: "10px",
        color: "black",
        borderRadius: 10
    }


    return (
        <div style={botao}>
            {texto}
        </div>
    )

}

function Main({ clientes }) {

    const mystyle = {
        backgroundColor: "#6E2D2C",
        padding: "20px",
        height: "100%"
    };

    return (
        <div style={mystyle}>
            <center>
                <Image
                    src="/logo.png"
                    width={500}
                    height={500}
                    marginBotton={30}
                />
                <a href="/listar" style={{ textDecoration: "none" }} > <Botao>LISTA DE CLIENTES</Botao></a>
                <a href="/adicionar" style={{ textDecoration: "none" }} > <Botao>ADICIONAR CLIENTE</Botao></a>
                <a href="/pontuar" style={{ textDecoration: "none" }} > <Botao>ADICIONAR PONTOS</Botao></a>
                <a href="/resgatar" style={{ textDecoration: "none" }} > <Botao>RESGATAR PONTOS</Botao></a>

            </center>
        </div>
    )
}

export default Main