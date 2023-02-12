import React, { useState } from "react";

export function Form(props) {
  const [formData, setFormDate] = useState({
    searchTerm: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
