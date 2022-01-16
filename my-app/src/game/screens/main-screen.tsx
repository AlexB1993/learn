import { MouseEventHandler } from "react";

export function MainScreen(props: { handlerFunction: (e: any) => void} ){
    console.log("updateMainScreen");
    return(<div className="screen">
        <h1>Aim Training</h1>
        <a href="#" className="start" onClick={props.handlerFunction}>Start game</a>
    </div>);
}