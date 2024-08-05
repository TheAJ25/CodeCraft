import React from "react";
import CodeMirror from "@uiw/react-codemirror";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";

// import { noctisLilac } from '@uiw/codemirror-theme-noctis-lilac';

import { loadLanguage } from "@uiw/codemirror-extensions-langs";

import { nord } from "@uiw/codemirror-theme-nord";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

const CodeEditor = () => {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const onChange = React.useCallback((value: string) => {
    // console.log("val:", val);
    // setValue(val);
    dispatch(updateCodeValue(value));
  }, []);
  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh-60px-50px)"
      className="code-editor"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={nord}
    />
  );
};

export default CodeEditor;
