import { useState } from 'react';
import { GameScreen } from './screens/game-screen';
import { MainScreen } from './screens/main-screen'
import { TimeScreen } from './screens/time-screen';
import './style.css'
export function Game(){
    const [isVisibleMainScreen, visibleMainScreen] = useState(true);
    const [isVisibleTimeScreen, visibleTimeScreen] = useState(false);
    const [isVisibleGameScreen, visibleGameScreen] = useState(false);

    const [time, setTime] = useState(0);
    const handlerStart = (e: any) => {
        visibleMainScreen(!isVisibleMainScreen);
        visibleTimeScreen(!isVisibleTimeScreen);
    }
    const handlerTime = (e: any)=> {
        const time = e.target.getAttribute("data-time");
        setTime(time);
        visibleTimeScreen(!isVisibleTimeScreen);
        visibleGameScreen(!isVisibleGameScreen);
    }
    return(
    <div>
        <button id='backButton'>&#8592;</button>
        {isVisibleMainScreen && (<MainScreen handlerFunction={handlerStart}/>)}
        {isVisibleTimeScreen && (<TimeScreen handler={handlerTime}/>)}
        {isVisibleGameScreen && (<GameScreen time={time}/>)}
    </div>
    )
}