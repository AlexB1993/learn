import { useEffect } from "react";
import { getDocumentHeight, getDocumentWidth, getHeightElemnt, getRandomValue, getWidthElemnt } from "../helper-function";

function TimeGame(props: {time: number}){

    const prepateTime = (time: number): string => {
        return `00:${time > 10 ? time : `0${time}`}`;
    }
    return <h3>Осталось <span id="time">{prepateTime(props.time)}</span></h3>;
}

export function GameScreen(props: {time: number}){

    const point = (w: number, h: number): HTMLElement => {
       const el = document.createElement('div');
       el.style.left = w + 'px';
       el.style.top = h + 'px';
       el.id = 'point';
       el.addEventListener('click', function() {
           el.remove();
           setPoint();
       });
       return el;
    }

    const setPoint = () => {
        const widthEl = getWidthElemnt(document.getElementById('board'));
        const heightEl = getHeightElemnt(document.getElementById('board'));

        const minW = (getDocumentWidth() - (widthEl - 50)) / 2;
        const maxW = (getDocumentWidth() + (widthEl - 50)) / 2;

        const minH = (getDocumentHeight() - (heightEl - 50)) / 2;
        const maxH = (getDocumentHeight() + (heightEl - 50)) / 2;

        const widht = getRandomValue(minW, maxW);
        const height = getRandomValue(minH, maxH);

        document.getElementById('board')?.appendChild(point(widht, height));
    }
    useEffect(() => {
        setPoint();
        window.addEventListener('resize', () => {
            document.getElementById('point')?.remove();
            setPoint();
        })
    }, []);
    return(<div className="screen">
        <TimeGame time={props.time}/>
        <div id="board" className="board"></div>
    </div>)
}