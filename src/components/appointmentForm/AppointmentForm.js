import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

    const contactNames = useMemo(() => {
      return contacts.map((contact) => contact.name);
    }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Name:</label>
      <input 
        id="title" 
        type="text" 
        value={title}
        placeholder="Appointment Name"
        onChange={(e) => setTitle(e.target.value)}
        required
      ></input>

      <ContactPicker
        name="contact"
        value={contact}
        contacts={contactNames}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <label for="date">Date:</label>
      <input
        id="date"
        name="date"
        type="date"
        value={date}
        min={getTodayString}
        onChange={(e) => setDate(e.target.value)}
        required
      ></input>
      <label for="time">Time:</label>
      <input
        id="time"
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      ></input>
      <input type="submit" value="Add Appointment"></input>
    </form>
  );
};
