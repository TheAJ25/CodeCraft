import React from "react";
import CodeMirror from "@uiw/react-codemirror";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// import { noctisLilac } from '@uiw/codemirror-theme-noctis-lilac';

import { loadLanguage} from '@uiw/codemirror-extensions-langs';

import { nord } from "@uiw/codemirror-theme-nord";

const CodeEditor = () => {

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions= {[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={nord}
    />
  );
};

export default CodeEditor;
