import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function StateComponent() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(currentValue => !currentValue);
    }
return (
    <div>
        <h1>What is react?</h1>
        <Button variant="primary" onClick={handleClick}>Show</Button>
        {visible && 
        (<Card>
            <Card.Body>
                A JavaScript Library
            </Card.Body>
        </Card>)}
    </div>
);
}

export default StateComponent;
