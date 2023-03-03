import React from "react";

class ProfileClass extends React.Component{

    constructor(props)
    {
       super(props);
       //Create State 
        this.state={
            userInfo:{
                name:"Dummy Name",
                Location:"Dummy Location",
            },
            count:0,
        
            
        }; 
        console.log("Constructor");
    }

    async componentDidMount()
    {
        const GIT_HUB= await fetch("https://api.github.com/users/ANandasaad");
        const json= await GIT_HUB.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })

        console.log("Compontent DId Mount");
    }

    componentDidUpdate()
    {
        console.log("Compontent DId Update");
    }
    componentWillUnmount()
    {
         console.log("Compontent will UnMount");
    }
   

    render()
    {
        console.log("render");
     
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state?.userInfo?.avatar_url}/>
                <h2>Name :{this.state?.userInfo?.name}</h2>
                <h2>Location :{this.state?.userInfo?.Location}</h2>
            {/* <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:1
                })
            }}>setCount</button> */}
            </div>
        )
    }

}

export default ProfileClass;