

const JumpToRecipeButton = ({handleClickFunction}) => {  

    // const handleClick = () => {
    //     console.log('Jump to recipe clicked');
    //     return () => {console.log('haha gotcha')}
    // }

    return (
        <button onClick={handleClickFunction}>
            Jump to Recipe
        </button>
    );
}

export default JumpToRecipeButton;