import { useState } from "react";

const useMovieFormData = () => {
  const [formData, setFormData] = useState({
    title: "",
    release_year: "",
    genre: "",
  });

  const postFormData = async () => {
    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        release_year: parseInt(formData.release_year),
      }),
    });

    if (response.ok) {
      setFormData({ title: "", release_year: "", genre: "" });
    } else {
      throw new Error("Failed to post form data");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return { formData, handleInputChange, postFormData };
};

export default useMovieFormData;
