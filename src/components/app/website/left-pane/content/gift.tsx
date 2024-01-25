import SectionGenericHero from "@/components/app/website/left-pane/section/generic.hero";
import SectionGiftContent from "@/components/app/website/left-pane/section/gift.content";
import Content from "./_components";
import SectionAdd from "@/components/app/website/left-pane/section/add";

export default function LeftPaneContentGift() {
  return (
    <Content>
      <SectionGenericHero />
      <SectionGiftContent />
      <SectionAdd />
    </Content>
  );
}
