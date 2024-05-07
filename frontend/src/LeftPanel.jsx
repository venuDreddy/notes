import "./App.css";
const noteClick = (id, setNoteId) => {
  setNoteId(id);
};
const LeftPanel = ({ data, setNoteId, noteId }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.map(({ id, title }) => {
        return (
          <div key={id} style={{ margin: "3px" }}>
            <button
              onClick={() => {
                noteClick(id, setNoteId);
              }}
              className={
                noteId == id
                  ? `left-panel-element active-left-panel-element`
                  : `left-panel-element`
              }
            >
              {title ? title : "untitled"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default LeftPanel;
