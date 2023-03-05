const Shimmer=()=>{
    return (
        <div className="flex flex-wrap justify-center animate-pulse">
         {Array(10).fill("").map((e)=><div className="w-[250px] h-56 p-[5px]   mx-[15px] my-[5px] bg-gray-300">
                 <div className="w-52 h-3 bg-slate-400" ></div>
                 <div></div>
         </div>)}   
 
        </div>
    )
}

export default Shimmer;