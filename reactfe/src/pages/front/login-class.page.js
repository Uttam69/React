import React from 'react'
class LoginPage extends React.Component{
    constructor(){
        console.log("I am teh first call")
        super();
        this.state ={
            name: "",
            password: "",
            loading: false
        }
    }
    componentDidMount= () =>{
        console.log("I am the third call");
        this.setState({
            loading: true
        })
    }
    componentDidUpdate= () =>{
        console.log("I am call after every second render call");
    }
    render = () =>{
        console.log("I am the second call")
        return(
            <div>
                <table width="100%" cellSpacing="1" cellPadding="3" border="1">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                </table>   
            </div>
        )
    }
}
export default LoginPage;