import { Switch } from "@/components/ui/switch";
import FormWebsiteVenue from "@/components/form/website.venue";
import { Section, SectionHeader } from "./_components";

export default function SectionWebsiteVenue() {
  return (
    <Section>
      <SectionHeader title="Venue" movable>
        <Switch />
      </SectionHeader>
      <FormWebsiteVenue />
    </Section>
  );
}
