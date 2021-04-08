import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class AddApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        street: '',
        city: '',
        state: '',
        manager: '',
        email: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        pets: '',
        user_id: '',
        title: '',
        img: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSummit = () => {
    this.props.createNewApt(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
      <div className="form-container">
        <h1 className="add-title">Add your apartment listing</h1>
          <div className="new-form">
            <Form>
              <FormGroup>
                <Label for="title">Title of Posting</Label>
                <Input
                  type="text"
                  name="title"
                  value={ this.state.form.title}
                  onChange={ this.handleChange}
                  placeholder="Beautiful Cottage" />
              </FormGroup>
              <FormGroup>
                <Label for="price">Rent price</Label>
                <Input
                  type="number"
                  name="price"
                  value={ this.state.form.price}
                  onChange={ this.handleChange}
                  placeholder="$1,200" />
              </FormGroup>
                <FormGroup>
                  <Label for="street">Street Address</Label>
                  <Input
                    type="text"
                    name="street"
                    value={ this.state.form.street}
                    onChange={ this.handleChange}
                    placeholder="Main St." />
                </FormGroup>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={ this.state.form.city}
                    onChange={ this.handleChange}
                    placeholder="San Diego" />
                </FormGroup>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    value={ this.state.form.state}
                    onChange={ this.handleChange}
                    placeholder="Ca" />
                </FormGroup>
                <FormGroup>
                  <Label for="bedrooms">Bedrooms</Label>
                  <Input
                    type="number"
                    name="bedrooms"
                    value={ this.state.form.bedrooms}
                    onChange={ this.handleChange}
                    placeholder="2" />
                </FormGroup>
                <FormGroup>
                  <Label for="bathrooms">Bathrooms</Label>
                  <Input
                    type="number"
                    name="bathrooms"
                    value={ this.state.form.bathrooms}
                    onChange={ this.handleChange}
                    placeholder="2" />
                </FormGroup>
                <FormGroup>
                  <Label for="pets">Pets allowed</Label>
                  <Input
                    type="text"
                    name="pets"
                    value={ this.state.form.pets}
                    onChange={ this.handleChange}
                    placeholder="yes/no" />
                </FormGroup>
                <FormGroup>
                  <Label for="manager">Contact Manager</Label>
                  <Input
                    type="text"
                    name="manager"
                    value={ this.state.form.manager}
                    onChange={ this.handleChange}
                    placeholder="John Doe" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Contact manager email</Label>
                  <Input
                    type="text"
                    name="email"
                    value={ this.state.form.email}
                    onChange={ this.handleChange}
                    placeholder="jdoe@gmail.com" />
                </FormGroup>
                <FormGroup>
                  <Label for="img">Enter url image</Label>
                  <Input
                    type="text"
                    name="img"
                    value={ this.state.form.img}
                    onChange={ this.handleChange}
                    placeholder="url" />
                </FormGroup>
                <Button style={{background:"rgb(94, 131, 138)"}} onClick= { this.handleSubmit }>Add Listing</Button>
            </Form>
            {this.state.submitted && <Redirect to="/apartments"/>}
          </div>
        </div>
      </>
    )
  }
}

export default AddApartment