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
    NavbarText
} from 'reactstrap';



class Header extends Component{
    constructor(){
        super()
        this.state={
            open:true
        }
    }
    toggle=()=>{
        this.setState({
            open:!this.state.open
        })
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
                                <NavLink href="jo">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="courses">Courses</NavLink>
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
                        <NavbarText> Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header ;