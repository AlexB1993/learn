export function TimeScreen(props: {handler : (e: any) => void}){
    const {handler} = props;
    return(<div className="screen">
        <div className="button-container">
            <button onClick={handler} data-time="10" className="time-btn">10 sec</button>
            <button onClick={handler} data-time="20" className="time-btn">20 sec</button>
            <button onClick={handler} data-time="30" className="time-btn">30 sec</button>
        </div>
    </div>)
}