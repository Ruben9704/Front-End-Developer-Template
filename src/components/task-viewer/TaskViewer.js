import TaskCard from "../task-card/TaskCard";
import "./TaskViewer.css";

function TaskViewer(props) {
  return (
    <div className="task-viewer">
        { props.taskList.map((element) => (
           <TaskCard key={element.id}
           id={element.id}
           status={element.status}
           name={element.name}
           dueDate={element.dueDate}
         /> 
        ))
}
    </div>
  );
}

export default TaskViewer;
