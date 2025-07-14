import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ComfortOption = () => {
  return (
    <div className="p-4 mt-6 border border-[#d3d3d3] rounded-md">
      <h4 className="mb-3">Lyon to Paris</h4>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-start space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <div className="space-y-2 mt-0.5">
            <Label htmlFor="option-one" className="font-bold">Essential</Label>
            <p className="text-xs text-">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem sed vitae quas, ullam accusantium at aperiam
              libero. Praesentium ducimus soluta minus fugit repudiandae vero
              modi, rem distinctio incidunt blanditiis! Perferendis beatae
              reiciendis a fugiat!
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <RadioGroupItem  value="option-two" id="option-two" />
          <div className="space-y-2 mt-0.5">
            <Label htmlFor="option-two" className="font-bold">OUIGO PLUS</Label>
            <p className="text-xs text-">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem sed vitae quas, ullam accusantium at aperiam
              libero. Praesentium ducimus soluta minus fugit repudiandae vero
              modi, rem distinctio incidunt blanditiis! Perferendis beatae
              reiciendis a fugiat!
            </p>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ComfortOption;
