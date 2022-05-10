// import {useState } from "react";

const FilterSort = ({title, sort, setSort, minMax, setMinMax}) => {

    const toggle = () => {
        if(sort === "price-asc" ) 
            setSort("price-desc");
        else{
            setSort("price-asc");
        } 
    }
    console.log("on passe bien la");
    return    <div>
                <div className="btn-sort">
                    <span>Trier par prix : </span>
                    <input type="checkbox" onClick={toggle}></input>
                    {/* <input type="checkbox" onClick={toggle} label="desc"></input> */}
                    <div className="minMax">
                        <span>Prix entre :</span>
                        <input placeholder="Min" type="text" onChange={(e)=>{
                            const newTab = [...minMax];
                            newTab.shift();
                            newTab.unshift(Number(e.target.value));
                            setMinMax(newTab);
                            console.log("fsdf:" ,newTab);
                        }} ></input>
                        <input placeholder="Max" type="text" onChange={(e)=>{
                            const newTab = [...minMax];
                            newTab.pop();
                            newTab.push(Number(e.target.value));
                            setMinMax(newTab);
                            console.log("fsdf:" ,newTab);
                        }}></input>
                    </div>
                </div>
            </div>;
}

export default FilterSort;