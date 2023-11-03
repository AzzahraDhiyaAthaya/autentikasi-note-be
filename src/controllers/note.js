const db = require('../db')

exports.allNotes = async(req, res) => {
    try {
        const allNotes = await db.query("SELECT * FROM notes");
        res.json(allNotes.rows)
    } catch (err) {
        console.error(err.message);
    }
}

exports.newNote =async(req, res) => {
    try {
        const {title, description} = req.body;
        const newNote = await db.query("INSERT INTO notes (title,description) VALUES($1,$2) RETURNING *",[title, description]);
        res.status(201).json({
            message: "success",
            data: newNote.rows[0]
        });
      } catch (err) {
          console.error(err.message);
      }
}

exports.oneNote = async(req, res) => {
    try {
        const {id} = req.params;
        const note = await db.query("SELECT * FROM notes WHERE id = $1", [id]);
        
        res.json(note.rows[0])
    } catch (err) {
        console.error(err.message);
    }
}

exports.editNote = async(req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;
        const updateNote = await db.query("UPDATE notes SET title = $1, description = $2 WHERE id = $3 RETURNING *", [title, description, id]);
        res.json("Note Has Been Updated!")
    } catch (err) {
        console.error(err.message);
    }
}

exports.deleteNote = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await db.query("DELETE FROM notes WHERE id = $1", [id]);
        res.json("Note Has Been Deleted!")
    } catch (err) {
        console.error(err.message);
    }
}