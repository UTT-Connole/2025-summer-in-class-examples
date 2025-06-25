
const FormInput = ({ title,value, onChange})=> {

    return(
  <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                {title}
              </label>
              <input
                type="text"
                id={title.toLowerCase()}
                name={title.toLowerCase()}
                value={value}
                onChange={onChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
    )
}

export default FormInput;