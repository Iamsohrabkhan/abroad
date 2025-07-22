import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ComfortOption = () => {
  return (
    <div className="p-4 mt-6 ">
      <h4 className="mb-3">Lyon to Paris</h4>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-start space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <div className="space-y-2 mt-0.5">
            <Label htmlFor="option-one" className="font-bold">Choose a Seat</Label>
            <Label htmlFor="option-one" className="font-light">From 30$</Label>
            <p className="text-xs text-">
              
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <RadioGroupItem  value="option-two" id="option-two" />
          <div className="space-y-2 mt-0.5">
            <Label htmlFor="option-two" className="font-light">We will assign you an available seat</Label>
            
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ComfortOption;
