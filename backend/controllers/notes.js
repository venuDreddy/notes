const db = require("../db");

//function to fetch notes
const getNotes = async (req, res) => {
  try {
    const { username } = req.jwtPayload.data;
    const queryString = `SELECT * FROM notes WHERE username=$1`;
    const values = [username];
    const query = await db.any(queryString, values);
    res.status(200).json({ success: true, data: query });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      error: `${error}`,
    });
  }
};

//function to create notes
const postNotes = async (req, res) => {
  try {
    const { username } = req.jwtPayload.data;
    const { title, content } = req.body;
    const queryString = `INSERT INTO notes(username,title,content,created_at,updated_at) VALUES($1,$2,$3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`;
    const values = [username, title, content];
    await db.none(queryString, values);
    res.status(200).json({
      success: true,
      data: {
        message: "created successfully",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      error: `${error}`,
    });
  }
};

//function to update notes
const putNotes = async (req, res) => {
  try {
    const { username } = req.jwtPayload.data;
    const { title, content } = req.body;
    const { id } = req.params;
    const queryString = `UPDATE notes SET title=$1,content=$2,updated_at=CURRENT_TIMESTAMP WHERE id=$3 AND username=$4`;
    const values = [title, content, id, username];
    const query = await db.result(queryString, values);
    if (query.rowCount == 0)
      return res.status(403).json({
        success: false,
        status: 403,
        error: "forbidden",
      });
    res.status(200).json({
      success: true,
      data: {
        message: "updated successfully",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      error: `${error}`,
    });
  }
};

//function to delete notes
const deleteNotes = async (req, res) => {
  try {
    const { username } = req.jwtPayload.data;
    const { id } = req.params;
    const queryString = `DELETE FROM notes WHERE id=$1 AND username=$2`;
    const values = [id, username];
    const query = await db.result(queryString, values);
    if (query.rowCount == 0)
      return res.status(403).json({
        success: false,
        status: 403,
        error: "forbidden",
      });
    res.status(200).json({
      success: true,
      data: {
        message: "Deleted successfully",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      error: `${error}`,
    });
  }
};

module.exports = { getNotes, postNotes, putNotes, deleteNotes };
