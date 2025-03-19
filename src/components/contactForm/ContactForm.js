import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input 
        type="text"
        id="name"
        name="name"
        placeholder="John Smith"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <label for="phone">Phone:</label>
      <input type="tel"
        id="phone"
        name="phone"
        value={phone}
        placeholder="042345678"
        pattern="^(0){0,1}[0-9]{3}[0-9]{3}[0-9]{3}$"
        onChange={(e) => setPhone(e.target.value)}
        required
      ></input>
      <label for="email">Email:</label>
      <input type="email"
        id="email"
        name="email"
        value={email}
        placeholder="john.smith@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <input type="submit" value="Add Contact"></input>
    </form>
  );
};

