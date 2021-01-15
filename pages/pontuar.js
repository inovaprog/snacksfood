import Image from 'next/image'
import Router from 'next/router'
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
class NameForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = { qtdPontos: '', telefone: '' };

        this.handleChangeQtdPontos = this.handleChangeQtdPontos.bind(this);
        this.handleChangeTelefone = this.handleChangeTelefone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeQtdPontos(event) {
        this.setState({ qtdPontos: event.target.value });
    }

    handleChangeTelefone(event) {
        this.setState({ telefone: event.target.value });
    }

    async handleSubmit(event) {
        fetch(`/api/pontuar_cliente/${this.state.telefone}/${this.state.qtdPontos}`)
            .then(function (response) {

                console.log(response);
                Router.push('../')

            });
        event.preventDefault();
    }

    render() {
        const mystyle = {
            backgroundColor: "#6E2D2C",
            padding: "20px",
            height: "100%",
            margin: 0,
            color: "white"
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

                    <center><h2>Adicionar pontos para cliente</h2></center>
                    <form onSubmit={this.handleSubmit}>
                        <label for="nome">Telefone:</label><br></br>
                        <input style={{ width: "100%" }} type="number" value={this.state.telefone} onChange={this.handleChangeTelefone}></input><br></br><br></br>
                        <label for="telefone" >Quantidade de Pontos:</label><br></br>
                        <input style={{ width: "100%" }} type="number" value={this.state.qtdPontos} onChange={this.handleChangeQtdPontos}></input><br></br>
                        <input style={{ width: "100%", marginTop:"20px" }} type="submit" value="Enviar" />
                    </form>
                    <BotaoVoltar></BotaoVoltar>
                </center>
            </div>
        );
    }
}


function Main({ clientes }) {

    return (
        <div>

            <NameForm></NameForm>
        </div>
    )
}

export default Main