import { Switch } from "@/components/ui/switch";
import FormWebsiteGallery from "@/components/form/website.gallery";
import { Section, SectionHeader } from "./_components";

export default function SectionWebsiteGallery() {
  return (
    <Section>
      <SectionHeader title="Gallery" movable>
        <Switch />
      </SectionHeader>
      <FormWebsiteGallery />
    </Section>
  );
}
