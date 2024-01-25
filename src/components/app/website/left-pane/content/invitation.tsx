import SectionAdd from "@/components/app/website/left-pane/section/add";
import SectionGenericEmbed from "@/components/app/website/left-pane/section/generic.embded";
import SectionGenericHero from "@/components/app/website/left-pane/section/generic.hero";
import SectionGenericParagraph from "@/components/app/website/left-pane/section/generic.paragraph";
import SectionGenericMedia from "@/components/app/website/left-pane/section/generic.media";
import SectionInvitationQuestion from "@/components/app/website/left-pane/section/invitation.question";
import SectionInvitationRsvp from "@/components/app/website/left-pane/section/invitation.rsvp";
import Content from "./_components";

export default function LeftPaneContentInvitation() {
  return (
    <Content>
      <SectionGenericHero />
      <SectionInvitationRsvp />
      <SectionInvitationQuestion />
      <SectionGenericParagraph />
      <SectionGenericMedia />
      <SectionGenericEmbed />
      <SectionAdd />
    </Content>
  );
}
