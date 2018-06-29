import React, {Component} from 'react';
import { Form, FormGroup, FormControl, Button, Grid, Jumbotron } from 'react-bootstrap'


export default class Header extends Component {
  constructor(props){
    super(props)
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      search: ''
    }
  }

  handleSearchChange(event) {
    console.log(event.target.value)
    this.setState({ search: event.target.value });
  }

  handleSumbit() {
    //search weather api
    console.log('seaching')
  }
  
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h1>World Wide Weather</h1>
          <p>Track weather conditions around the globe.</p>
          <Form inline>
            <FormGroup controlId="formInlineEmail">
              <FormControl type="search" placeholder="weather in..." value={this.state.search} onChange={this.handleSearchChange}/>
            </FormGroup>
            <Button type="submit" onClick={this.handleSumbit}>search</Button>
          </Form>
        </Jumbotron>
      </Grid>
    )
  }
}

