import React, {Component} from "react";
import {FormField, Form, Segment, FormInput, Button, Confirm} from "semantic-ui-react";
import axios from 'axios';

class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            email: '',
            vaga: '',
            nascimento: ''
        }
    }
    changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
};

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/users', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
};

    state = {open : false};
    show = () => this.setState({open: true});
    handleConfirm = () => this.setState({open: false});
    handleCancel = () => this.setState({open: false});


    render() {
        const { id, nome, email, vaga, nascimento } = this.state;
        return(

            <Segment id='signup-area'>
                <label value={id}/>
                <h4 id='title-style'>Criar Cadastro</h4>
                <Form size='small' onSubmit={this.submitHandler}>
                    <FormField width={8}>
                        <FormInput label='Nome Completo'
                                   placeholder='Ex.: João'
                                   type='text'
                                   value={nome}
                                   name='nome'
                                   onChange={this.changeHandler}
                                   />
                    </FormField>

                    <FormField width={8}>
                        <FormInput label='Email'
                                   placeholder='seu@email.com'
                                   type='email'
                                   value={email}
                                   onChange={this.changeHandler}
                                   name='email'/>
                    </FormField>

                    <FormField width={8}>
                        <FormInput label='Vaga'
                                   placeholder='Ex.: Front-End'
                                   type='text'
                                   value={vaga}
                                   onChange={this.changeHandler}
                                   name='vaga'
                                   validate/>
                    </FormField>

                    <FormField width={8}>
                        <FormInput label='Data de Nascimento'
                                   placeholder=''
                                   type='date'
                                   onChange={this.changeHandler}
                                   value={nascimento}
                                   name='nascimento'

                        />
                    </FormField>

                    <Button className='btn-style'
                            onClick={this.show}
                                type='submit'>Criar!
                    </Button>
                    <Confirm
                        open={this.state.open}
                        header='Status de Confirmação'
                        onCancel={this.handleCancel}
                        onConfirm={(event) => window.location.reload(false).then(this.handleConfirm)}
                        content='Clique para confirmar o Cadastro'
                    />



                </Form>



            </Segment>
        )
    }
}
export default Cadastro