const db = require("../db");

//function to fetch notes
const getNotes = async (req, res) => {
  try {
    const { username } = req.jwtPayload.data;
    const query = await db.any(
      `SELECT * FROM notes WHERE username='${username}'`
    );
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
    await db.none(
      `INSERT INTO notes(username,title,content,created_at,updated_at) VALUES('${username}','${title}','${content}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`
    );
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
    const query = await db.result(
      `UPDATE notes SET title='${title}',content='${content}',updated_at=CURRENT_TIMESTAMP WHERE id='${id}' AND username='${username}'`
    );
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
    const query = await db.result(
      `DELETE FROM notes WHERE id='${id}' AND username='${username}'`
    );
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
