import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2014, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2015, 7, 24),
    },
    {
      id: "T-3",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2016, 4, 14),
    },
    {
      id: "T-4",
      name: "14 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2018, 3, 22),
    },
    {
      id: "T-5",
      name: "15 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2019, 7, 21),
    },
    {
      id: "T-6",
      name: "16 Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2015, 5, 14),
    },
    {
      id: "T-7",
      name: "17 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2015, 6, 24),
    },
    {
      id: "T-8",
      name: "18 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2015, 6, 24),
    },
    {
      id: "T-9",
      name: "19 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2015, 6, 24),
    },
  ];
  return (
    <div className="app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer taskList={data} />
      </div>
    </div>
  );
}

export default App;
