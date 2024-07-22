import { Button } from "./ui/button";
import { Share2 } from "lucide-react";
import { Save } from "lucide-react";

import { CompilerSliceStateType } from "@/redux/slices/compilerSlice";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

const HelperHeader = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <div className="helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="btn_container flex gap-2">
        <Button className="flex items-center justify-center gap-1">
          <Save size={15} />
          Save
        </Button>
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-1"
        >
          <Share2 size={14} />
          Share
        </Button>
      </div>

      <div className="tab_switcher flex justify-center items-center gap-1">
        <small>Current Language: </small>
        <Select
          onValueChange={(value) => dispatch(updateCurrentLanguage(value as CompilerSliceStateType["currentLanguage"]))}
        >
          <SelectTrigger className="w-[120px] border-2 border-white font-bo">
            <SelectValue defaultValue={currentLanguage} placeholder="HTML" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JAVASCRIPT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HelperHeader;
