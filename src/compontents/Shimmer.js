const Shimmer=()=>{
    return (
        <div className="resturant-list">
         {Array(10).fill("").map((e)=><div className="shimmer-list"></div>)}   
 
        </div>
    )
}

export default Shimmer;