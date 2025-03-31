"use client"
import { useState } from "react";

export default function HomePage() {
    const [down_counter, setUpperCounter] = useState(1);
    const[size, scaleImg] = useState(500);

    return (
        <div>
            <h1>Welcome to my site!</h1>
            <button onClick={() => setUpperCounter(down_counter > 2 ? 1 : down_counter + 1)}>Next Image >>> </button>
            {ShowDog(down_counter)}
    
            <div>
            <br /><br />
            <h2>create new memories..</h2>
             <button onClick={() => scaleImg(size < 300 ? 300 : 150)}>scale image here >>>></button>
             {ScaleImg(size)}
            </div>
        </div>
        
    );
}

function ShowDog(down_counter) {
    return <img width="200" src={`/images/down_slider_${down_counter}.png`} alt="" />;
}

function ScaleImg(new_width){
    return <img  width ={new_width} src="/images/upper_slider_1.png" alt=""/>
}
