import Header from './components/Header';
import IngredientList from './components/IngredientList';
import JumpToRecipeButton from './components/JumpToRecipeButton';
import SendMessage from './components/SendMessage';

import {useState, useRef} from 'react';

const App = () => {

    const [subtitleOpen, setSubtitleOpen] = useState(false);
    const [counter, setCounter] = useState(0);

    const counterRef = useRef(0);

    
    const recipeRef = useRef(null);

    const ingredients = [
        'Cream Cheese',
        'Goat Cheese',
        'Heavy Cream',
        'Other stuff'
    ];

    const handleToggleSubtitle = () => {
        console.log('Open subtitle clicked');
        setSubtitleOpen(!subtitleOpen);

        console.log("state counter: ", counter)
        console.log("ref counter: ", counterRef.current)
        setCounter((prevCounter) => prevCounter + 1);
        
        counterRef.current = counterRef.current + 1;
        console.log("state counter: ", counter)
        console.log("ref counter: ", counterRef.current)
        
    }


    const title = "Hello";
    return (
        <>
        <h1>{ title }</h1>

        <h2>Counter: {counter}</h2>
        <h2>Counter Ref: {counterRef.current}</h2>
        <Header title="New York Cheesecake" color="red"/>
        <SendMessage/>
        <IngredientList ingredients={ingredients}/>

        {subtitleOpen && <h4>Subtitle</h4>}
        <button onClick={handleToggleSubtitle}>Toggle Subtitle </button>

        <JumpToRecipeButton handleClickFunction={()=>{
            recipeRef.current.scrollIntoView({ behavior: 'smooth' });
        }}/>

        <IngredientList ingredients={ingredients}/>
        <IngredientList ingredients={ingredients}/>
        <IngredientList ingredients={ingredients}/>
        <IngredientList ingredients={ingredients}/>
        <IngredientList ingredients={ingredients}/>
        <IngredientList ingredients={ingredients}/>

        <Header title="Basque"/>
        <IngredientList />
        <Header title="Peaches" ingredients={["peaches"]}/>
        <IngredientList/>
        <div ref={recipeRef}>Recipe</div>
        <Header title="Pie"/>
        <IngredientList/>
        </>
    );
}

export default App
