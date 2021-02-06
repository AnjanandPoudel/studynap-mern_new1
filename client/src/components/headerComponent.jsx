import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Modal,
    ModalBody,
    ModalHeader,
    Button,
    FormGroup,
    Form,
    Label,
    Input
} from 'reactstrap';



class Header extends Component{
    constructor(){
        super()
        this.state={
            open:true,
            modalOpen:false

        }
        this.handleLogin=this.handleLogin.bind(this)
    }
    toggle=()=>{
        this.setState({
            open:!this.state.open,
        })
    }
    toggleModal=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
        console.log(this.state.modalOpen)
    }
    handleLogin(event){
        this.toggleModal()
        alert(this.username.value+ '  ' +this.password.value)
        event.preventdefault()
    }

    
    render(){
        return(
            <div className="">
                <Navbar color="dark" dark expand="md" >
                    <NavbarBrand href="/"> studynap </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.open} navbar className="navbarflex">
                        <Nav className="mr-5 "  navbar >
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/courses">Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                            
                            <UncontrolledDropdown nav inNavbar> 
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink>
                                    <Button onClick={this.toggleModal}>Login  <span className="fa fa-sign-in fa-lg"></span></Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal} className="loginmodal">
                    <ModalHeader className="m-1" toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody className="m-4">
                        <Form   onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username:</Label>
                                <Input type="text" id="username" name="username" placeholder="username" innerRef={(input)=>this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password:</Label>
                                <Input type="password" id="password" name="password" placeholder="password" innerRef={(input)=>this.password=input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check> 
                                    <Input type="checkbox" name="rememberme" innerRef={(input)=>this.rememberme=input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="btn btn-success">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default Header ;