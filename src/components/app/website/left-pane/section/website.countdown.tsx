import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import FormStyleSize from "@/components/form/style.size";
import { Section, SectionHeader } from "./_components";

export default function SectionWebsiteCountdown() {
  return (
    <Section>
      <SectionHeader title="Countdown" movable>
        <Switch />
      </SectionHeader>
      <FormStyleSize />
      <div className="flex items-center space-x-2">
        <Checkbox id="separateSection" />
        <label className="text-sm" htmlFor="separateSection">
          Show as a separate section
        </label>
      </div>
    </Section>
  );
}
