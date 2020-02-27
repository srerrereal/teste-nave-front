import React, {Component} from "react";
import {Segment, Form, FormField, FormInput, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";


export default class HomePage extends Component {

    render() {
        return(


            <Segment id='login-area'>

                <Container fluid textAlign='center' className='title-style'>
                <h2> Entrar </h2>
                </Container>
                    <Form>
                    <FormField>
                        <FormInput placeholder='@usuario' name='usuario' type='text' validated />
                    </FormField>
                    <FormField>
                        <FormInput placeholder='Senha' name='senha' type='password' validated />
                    </FormField>
                        <Link to='/vagas'>

                    <button
                                className='btn-style'
                                type='submit'>Entrar</button>

                        </Link>

                        <Link to='/signup'>
                     <button
                                 className='btn-style'
                                type='submit'>Cadastrar</button>
                         </Link>

                </Form>

            </Segment>
        );
    }
}