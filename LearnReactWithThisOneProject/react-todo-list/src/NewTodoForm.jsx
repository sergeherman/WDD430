import PropTypes from 'prop-types';
import { useState } from "react"

export function NewTodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem(""); // Clear the input field after adding the item
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
    </div>
    <button className="btn">Add</button>
  </form>
    )
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};