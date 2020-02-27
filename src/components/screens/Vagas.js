import React, {Component} from "react";
import axios from 'axios';
import {Button, Container, Segment, Table, TableBody, TableCell, TableHeader, TableRow} from "semantic-ui-react";
import {Link} from "react-router-dom";


class Vagas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                console.log(response);
                this.setState({users: response.data})
            })

            .catch(error => {
                console.log(error)
            })

    }
    render() {

        const { users } =this.state;

        return(
          <Container>

              <Link to='/signup'>

                  <Button
                      className='btn-signup'
                      type='submit'>Criar
                  </Button>

              </Link>



              <Segment id='job-section'>

              <Table celled compact>
                  <TableHeader>
                      <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Nome</TableCell>
                          <TableCell>E-mail</TableCell>
                          <TableCell>Vaga</TableCell>
                          <TableCell>Data de Nascimento</TableCell>
                      </TableRow>
                  </TableHeader>


                          {
                              users.length ?
                                  users.map(post =>
                                  <TableBody>

                                      <TableRow  key={post.id}>

                                          <TableCell>{post.id}</TableCell>

                                          <TableCell>{post.nome}</TableCell>

                                          <TableCell>{post.email}</TableCell>

                                          <TableCell>{post.vaga}</TableCell>

                                          <TableCell>{post.nascimento}</TableCell>

                                      </TableRow>

                                  </TableBody>

                                  ) : null
                          }



              </Table>
          </Segment>

      </Container>

        );
    }
}
export default Vagas