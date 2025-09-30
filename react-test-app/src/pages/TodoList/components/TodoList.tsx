export default function TodoList({ tasks }) {
  return (
    <>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}
