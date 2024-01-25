import Styles from "@/components/app/navbar.module.css"
import NavbarLink from "@/components/app/navbar/link"

export default function NavbarDesktopSelect({ tabs }: NavbarDesktopSelectProps) {
  return (
    <div className={Styles.navbarItemContainer}>
      {tabs.map((link) => (
        <NavbarLink {...link} key={link.link} />
      ))}
    </div>
  )
}

interface NavbarDesktopSelectProps {
  tabs: {
    href: string
    link: string
    label: string
  }[]
}
