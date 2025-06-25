
const MovieTableHeader = ({children}) => {

    const classes ="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" 
    return<th scope="col" className={classes}>{children}</th>
}


export default MovieTableHeader