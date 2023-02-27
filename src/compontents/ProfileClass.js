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
        }; 


        console.log("Constructor");
    }

    componentDidMount()
    {
        console.log("Component Did render");
    }
   

    render()
    {
        console.log("render");
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name :{this.state.userInfo.name}</h2>
                <h2>Location :{this.state.userInfo.Location}</h2>
            </div>
        )
    }

}

export default ProfileClass;