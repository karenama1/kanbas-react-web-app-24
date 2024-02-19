import House from "./json/House";
import TemplateLiteral from "./string/TemplateLiterals";
import FilterFunction from "./arrays/FilterFunction";
import FindIndex from "./arrays/FindIndex";
import FindFunction from "./arrays/FindFunction";
import JsonStringify from "./json/JsonStringify";
import ForLoops from "./arrays/ForLoops";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDestructing";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import Spreading from "./json/Spreading";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
        <h3>JavaScript</h3>
        <FunctionParenthesisAndParameters/>
        <FunctionDestructing />
        <Destructing />
        <Spreading />
        <MapFunction />
        <JsonStringify/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <TemplateLiteral/>
        <House/>
        <WorkingWithArrays />
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <ImpliedReturn />
        <ArrowFunctions />
        <ES5Functions />
        <TernaryOperator />
        <IfElse />
        <BooleanVariables />
        <VariableTypes />
        <VariablesAndConstants />
       </div>
    );
 }
 export default JavaScript