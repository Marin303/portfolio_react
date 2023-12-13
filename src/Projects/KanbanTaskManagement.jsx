import React from "react";
import KanbanTaskManagementImg from "../Images/kanban.png";
const KanbanTaskManagement = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={KanbanTaskManagementImg}
        alt="edit product field of application"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
      />
      <div className="md:w-1/2">
        <a
          href="https://github.com/Marin303/task_management"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Task management
          <span className="pl-2">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </a>
        <p className="text-slate-400 pt-2">
          Task management with this dynamic application designed for efficient
          job organization. Seamlessly transition between tasks, ensuring a
          visually intuitive representation of workflow. Users can customize
          properties and effortlessly switch task statuses, from 'To-Do' to
          'Done,' providing an overview of pending and completed tasks. This
          desktop-exclusive tool boasts a sleek design with custom-made SCSS.
          Leveraged the power of React and JSON for smooth drag-and-drop
          functionality, theme switching with useContext, and robust CRUD
          operations.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>Scss</p>
          <p>React</p>
          <p>JSON</p>
        </div>
      </div>
    </section>
  );
};

export default KanbanTaskManagement;
