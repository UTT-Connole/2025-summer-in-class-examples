
const Button = ({title, disabled}) => {

    return (
        <button disabled={disabled} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">{title}</button>
    )
}

export default Button;