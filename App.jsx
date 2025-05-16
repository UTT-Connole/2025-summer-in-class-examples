import Header from './Header';
import IngredientList from './IngredientList';
import JumpToRecipeButton from './JumpToRecipeButton';

import {useState} from 'react';

const App = () => {

    const [subtitleOpen, setSubtitleOpen] = useState(false);
    const [counter, setCounter] = useState(0);

    const ingredients = [
        'Cream Cheese',
        'Goat Cheese',
        'Heavy Cream',
        'Other stuff'
    ];

    const handleToggleSubtitle = () => {
        console.log('Open subtitle clicked');
        setSubtitleOpen(true);
        setSubtitleOpen(false);
        setSubtitleOpen(17)
        setSubtitleOpen("hello")

        setCounter((prevCounter) => prevCounter + 1);
    }



    let subtitle
    if (subtitleOpen) {
        subtitle = <h4> Subtitle</h4>
    }
    else{
        subtitle = <></>
    }

    const title = "Hello";
    return (
        <>
        <h1>{ title }</h1>
        <Header title="New York Cheesecake" color="red"/>
        <IngredientList ingredients={ingredients}/>

        {subtitle}

        {subtitleOpen && <h4>Subtitle</h4>}
        {subtitleOpen ? <h4>Subtitle</h4> : <></>}

        <button onClick={handleToggleSubtitle}>Toggle Subtitle </button>

        <JumpToRecipeButton handleClickFunction={()=>{console.log(2)}}/>
        <Header title="Basque"/>
        <IngredientList />
        <Header title="Peaches" ingredients={["peaches"]}/>
        <IngredientList/>
        <Header title="Pie"/>
        <IngredientList/>
        </>
    );
}

export default App
