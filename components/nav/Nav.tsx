"use client"
import { useState, useEffect, CSSProperties } from 'react'
import styles from "./nav.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type menuItem = {
    title: string,
    link: string,
    subMenu?: subMenuItem[]
}

type subMenuItem = {
    title: string,
    link: string,
    subSubMenu?: subSubMenuItem[]
}

type subSubMenuItem = {
    title: string,
    link: string
}

export default function MainNav1({ menuInfoArr }: { menuInfoArr: menuItem[] }) {
    return (
        <nav className={styles.mainNav}>
            <DesktopNav menuInfoArr={menuInfoArr} />
            <MobileNav menuInfoArr={menuInfoArr} />
        </nav>
    )
}


function DesktopNav({ menuInfoArr }: { menuInfoArr: menuItem[] }) {
    const pathname = usePathname()

    return (
        <ul className={`${styles.mainMenu} ${styles.desktopNav} noScrollBar`}>
            {menuInfoArr.map((eachMenuItem, eachMenuItemIndex) => (
                <li key={eachMenuItemIndex} className={styles.mainMenuItem} onClick={(e) => { e.stopPropagation(); }} >
                    <div style={{ display: "flex", alignItems: "center", gap: ".3rem", justifyContent: "space-between" }}>
                        <Link style={{ color: pathname === eachMenuItem.link ? "var(--primaryColor)" : "" }} href={eachMenuItem.link}>{eachMenuItem.title}</Link>

                        {eachMenuItem.subMenu !== undefined && (
                            <svg style={{ width: ".7rem", fill: pathname === eachMenuItem.link ? "var(--primaryColor)" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        )}
                    </div>

                    {eachMenuItem.subMenu && (
                        <ul className={styles.subMenu}>
                            {eachMenuItem.subMenu.map((eachSubMenuItem, eachSubMenuItemIndex) => (
                                <li key={eachMenuItemIndex} className={styles.subMenuItem} onClick={(e) => { e.stopPropagation() }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: ".3rem", justifyContent: "space-between" }}>
                                        <Link style={{ color: pathname === eachSubMenuItem.link ? "var(--primaryColor)" : "" }} href={eachSubMenuItem.link}>{eachSubMenuItem.title}</Link>

                                        {eachSubMenuItem.subSubMenu !== undefined && (
                                            <svg style={{ width: ".7rem", color: pathname === eachSubMenuItem.link ? "var(--primaryColor)" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                        )}
                                    </div>


                                    {eachSubMenuItem.subSubMenu && (
                                        <ul className={styles.subSubMenu}>
                                            {eachSubMenuItem.subSubMenu.map((seenSubSubMenuItem, seenSubSubMenuItemIndex) => (
                                                <li key={seenSubSubMenuItemIndex} style={{ color: pathname === seenSubSubMenuItem.link ? "var(--primaryColor)" : "" }} className={styles.subSubMenuItem}><Link href={seenSubSubMenuItem.link}>{seenSubSubMenuItem.title}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}


function MobileNav({ menuInfoArr }: { menuInfoArr: menuItem[] }) {
    const pathname = usePathname()

    return (
        <ul className={`${styles.mainMenu} ${styles.mobileNav} noScrollBar`}>
            {menuInfoArr.map((eachMenuItem, eachMenuItemIndex) => (
                <MenuItem key={eachMenuItemIndex} seenMenuItem={eachMenuItem} seenSubMenuArr={eachMenuItem.subMenu} />
            ))}
        </ul>
    )
}

function MenuItem({ seenMenuItem, seenSubMenuArr }: { seenMenuItem: menuItem, seenSubMenuArr: subMenuItem[] | undefined, }) {
    const [showingSubMenu, showingSubMenuSet] = useState(false)
    const pathname = usePathname()


    return (
        <li className={styles.mainMenuItem} onClick={(e) => { e.stopPropagation(); showingSubMenuSet(prev => !prev) }} >
            <div style={{ display: "flex", alignItems: "center", gap: ".3rem", justifyContent: "space-between" }}>
                <Link style={{ color: pathname === seenMenuItem.link ? "var(--primaryColor)" : "" }} href={seenMenuItem.link}>{seenMenuItem.title}</Link>

                {seenSubMenuArr !== undefined && (
                    <svg style={{ width: ".7rem", fill: pathname === seenMenuItem.link ? "var(--primaryColor)" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                )}
            </div>

            {showingSubMenu && seenSubMenuArr !== undefined && (
                <ul className={styles.subMenu}>
                    {seenSubMenuArr.map((eachSubMenuItem, eachSubMenuItemIndex) => <SubMenuItem key={eachSubMenuItemIndex} seenSubMenuItem={eachSubMenuItem} seenSubSubMenuArr={eachSubMenuItem.subSubMenu} />)}
                </ul>
            )}
        </li>
    )
}

function SubMenuItem({ seenSubMenuItem, seenSubSubMenuArr }: { seenSubMenuItem: subMenuItem, seenSubSubMenuArr: subSubMenuItem[] | undefined }) {
    const [showingSubSubMenu, showingSubSubMenuSet] = useState(false)
    const pathname = usePathname()

    return (
        <li className={styles.subMenuItem} onClick={(e) => { e.stopPropagation(); showingSubSubMenuSet(prev => !prev) }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".3rem", justifyContent: "space-between" }}>
                <Link style={{ color: pathname === seenSubMenuItem.link ? "var(--primaryColor)" : "" }} href={seenSubMenuItem.link}>{seenSubMenuItem.title}</Link>

                {seenSubSubMenuArr !== undefined && (
                    <svg style={{ width: ".7rem", color: pathname === seenSubMenuItem.link ? "var(--primaryColor)" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                )}
            </div>


            {showingSubSubMenu && seenSubSubMenuArr !== undefined && (
                <ul className={styles.subSubMenu}>
                    {seenSubSubMenuArr.map((seenSubSubMenuItem, seenSubSubMenuItemIndex) => <SubSubMenuItem key={seenSubSubMenuItemIndex} seenSubSubMenuItem={seenSubSubMenuItem} />)}
                </ul>
            )}
        </li>
    )
}

function SubSubMenuItem({ seenSubSubMenuItem }: { seenSubSubMenuItem: subSubMenuItem }) {
    const pathname = usePathname()

    return (
        <li style={{ color: pathname === seenSubSubMenuItem.link ? "var(--primaryColor)" : "" }} className={styles.subSubMenuItem}><Link href={seenSubSubMenuItem.link}>{seenSubSubMenuItem.title}</Link></li>
    )
}