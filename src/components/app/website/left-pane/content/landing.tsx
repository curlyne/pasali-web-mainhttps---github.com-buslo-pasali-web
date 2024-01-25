import SectionAdd from "@/components/app/website/left-pane/section/add";
import SectionGenericGroup from "@/components/app/website/left-pane/section/generic.group";
import SectionGenericHero from "@/components/app/website/left-pane/section/generic.hero";
import SectionWebsiteCountdown from "@/components/app/website/left-pane/section/website.countdown";
import SectionWebsiteGallery from "@/components/app/website/left-pane/section/website.gallery";
import SectionWebsiteVenue from "@/components/app/website/left-pane/section/website.venue";
import SectionGenericParagraph from "@/components/app/website/left-pane/section/generic.paragraph";
import SectionGenericMedia from "@/components/app/website/left-pane/section/generic.media";
import SectionGenericEmbed from "@/components/app/website/left-pane/section/generic.embded";
import Content from "./_components";

export default function LeftPaneContentLanding() {
  return (
    <Content>
      <SectionGenericHero />
      <SectionWebsiteCountdown />
      <SectionWebsiteVenue />
      <SectionWebsiteGallery />
      <SectionGenericParagraph />
      <SectionGenericMedia />
      <SectionGenericEmbed />
      <SectionGenericGroup>
        <SectionGenericParagraph />
        <SectionGenericMedia />
      </SectionGenericGroup>
      <SectionAdd />
    </Content>
  );
}
