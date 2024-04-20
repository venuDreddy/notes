const noteClick = (id, setNoteId) => {
  setNoteId(id);
};
const LeftPanel = ({ data, setNoteId }) => {
  // console.log(data);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map(({ id, title }) => {
        return (
          <button
            key={id}
            id={id}
            onClick={() => {
              noteClick(id, setNoteId);
            }}
          >
            {title ? title : "untitled"}
          </button>
        );
      })}
    </div>
  );
};
export default LeftPanel;
