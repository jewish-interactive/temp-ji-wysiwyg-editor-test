import * as React from "react";
import * as ReactDOM from "react-dom";
import "ji-wysiwyg-editor/dist/ji-wysiwyg-editor.css";
import JiEditor from "ji-wysiwyg-editor";

const App = () => (
    <div>
        Text Editor here:
        <p/>
        <JiEditor defaultValue={`<span>Hello World!</span>`} onChange={console.log} />
    </div>
    );

ReactDOM.render(<App />, document.getElementById("app"));
