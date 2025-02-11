import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useId } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SelectCustom({label,items,name}:{label:string,items:string[],name?:string}) {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select defaultValue="1" name={label}>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
            {items.map((item,index)=>(
                <SelectItem key={index}  value={item}>{item}</SelectItem>
            ))}
          
        </SelectContent>
      </Select>
    </div>
  );
}
