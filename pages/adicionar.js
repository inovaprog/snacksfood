
class NameForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = { nome: '', telefone: '' };

        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeTelefone = this.handleChangeTelefone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNome(event) {
        this.setState({ nome: event.target.value });
    }

    handleChangeTelefone(event) {
        this.setState({ telefone: event.target.value });
    }

    async handleSubmit(event) {
        fetch(`/api/add_cliente/${this.state.nome}/${this.state.telefone}`)
            .then(function (response) {

                console.log(response);
            });
        event.preventDefault();
    }

    render() {
        return (

            <center>
                <form onSubmit={this.handleSubmit}>
                    <label for="nome">Nome:</label><br></br>
                    <input style={{ width: "100%" }} type="text" value={this.state.nome} onChange={this.handleChangeNome}></input><br></br><br></br>
                    <label for="telefone" >Telefone:</label><br></br>
                    <input style={{ width: "100%" }} type="text" value={this.state.telefone} onChange={this.handleChangeTelefone}></input><br></br>
                    <input type="submit" value="Enviar" />
                </form>
            </center>
        );
    }
}


function Main({ clientes }) {

    return (
        <div>
            <center><h2>Cadastrar Novo Cliente</h2></center>
            <NameForm></NameForm>
        </div>
    )
}

export default Main