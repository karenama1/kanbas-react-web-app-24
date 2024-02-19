import TodoItem from "./todos/TodoItem";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Classes from "./Classes";
import Styles from "./Styles"
import TodoList from "./todos/TodoList";
import Add from "./Add";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
      <TodoItem/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <TodoList />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
     <PathParameters/>
     <JavaScript/>
    </div>
  );
}

export default Assignment3;