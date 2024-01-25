export default function IconBlank({ className }: { className?: string }) {
  return <div className={(className ?? "") + " w-[16px] h-[16px]"} />;
}
