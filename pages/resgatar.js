
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
        fetch(`/api/resgatar_cliente/${this.state.telefone}/${this.state.qtdPontos}`)
            .then(function (response) {

                console.log(response);
            });
        event.preventDefault();
    }

    render() {
        return (

            <center>
                <form onSubmit={this.handleSubmit}>
                    <label for="nome">Telefone:</label><br></br>
                    <input style={{ width: "100%" }} type="text" value={this.state.telefone} onChange={this.handleChangeTelefone}></input><br></br><br></br>
                    <label for="telefone" >Quantidade de Pontos:</label><br></br>
                    <input style={{ width: "100%" }} type="text" value={this.state.qtdPontos} onChange={this.handleChangeQtdPontos}></input><br></br>
                    <input type="submit" value="Enviar" />
                </form>
            </center>
        );
    }
}


function Main({ clientes }) {

    return (
        <div>
            <center><h2>Resgatar pontos do cliente</h2></center>
            <NameForm></NameForm>
        </div>
    )
}

export default Main