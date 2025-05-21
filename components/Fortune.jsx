import { useState, useEffect, use } from 'react';

const url = "https://sd-6310-2025-summer-express-app.onrender.com/api/fortune-cookie";


const Fortune = ({title}) => {

    const [fortuneText, setFortuneText] = useState("...");
    const [otherText, setOtherText] = useState("other text");

    const getNewFortune = () => {
            fetch(url).then((response) => { 
            response.json().then((data) => {
                console.log(data);
                setFortuneText(data.fortune);
            }).catch((error) => {
                console.error("Error parsing JSON:", error);
            }); 
        })
    }


    useEffect(() => {
        return() => {
            console.log("Fortune component unmounted");
        }
    }, [chatroomId]);

    const handleClick = () => {
        console.log("Button clicked");
        setOtherText("asdfasdfasdf");
        getNewFortune();
    }


    return(<div>
        <h2>Fortune</h2>
        <p>{fortuneText}</p>
        <p>{otherText}</p>
        <button onClick={handleClick}> change text</button>
    </div>)
}

export default Fortune;