import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayIndexAndLength from "../a3/JavaScript/arrays/ArrayIndexAndLength";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";

function Assignment4() {
   function sayHello() {       //implement callbakc function
    alert("Hello");
   }
  return(
    <div>
      <h1>Assignment 4</h1>
      <PassingDataOnEvent/>
      <ClickEvent/>
      <PassingFunctions theFunction={sayHello} />       
      <EventObject/> 
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <ReduxExamples/>
      <TodoList/>

    </div>
  );
}
export default Assignment4;