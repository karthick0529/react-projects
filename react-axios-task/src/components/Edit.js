import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from "react-router-dom"

function Edit({ user, onEditUser }) {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser(formData);
  };

  const navigate = useNavigate()

  return (
    <div className="container">
      <h1 className="sub-heading">EDIT USER</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
        <Button variant="contained" startIcon={<UndoIcon />} onClick={() => navigate(-1)}>
            BACK
        </Button>
      </div>
      {/* Displaying all field for which the edit button is clicked */}
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="NAME"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="USERNAME"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="EMAIL ADDRESS"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="PHONE NUMBER"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          type="text"
          label="WEBSITE"
          value={formData.website}
          onChange={(event) =>
            setFormData({ ...formData, website: event.target.value })
          }
        />
        <button type="submit" className="btn btn-success mt-4">
          SAVE USER
        </button>
        
      </form>
    </div>
  );
}

export default Edit;