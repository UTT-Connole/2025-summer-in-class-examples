
import { useState, FormEvent} from 'react';
const useMovieFormData = () => {

  const [formData, setFormData] = useState({
    title: '',
    director: '',
    year: new Date().getFullYear(),
    genre: ''
  });

  const [error, setError] = useState(false);   

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'year' ? parseInt(value) : value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const newMovie = await response.json();
      
      setFormData({
        title: '',
        director: '',
        year: new Date().getFullYear(),
        genre: ''
      });
      
    } catch (err) {
        setError(true);
    }
  };

  return {formData, setFormData, handleInputChange, handleSubmit, movieError: error};
}

export default useMovieFormData;