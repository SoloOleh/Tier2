function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd {
      id: Date.now(),
      name: e.target.elements.name.value  
    };
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Add task</button>
    </form>
  );
}
export default ContactForm;
