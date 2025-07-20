import styles from "./Section.module.css";
import { ReactNode } from "react";

export function Section({
    title,
    children,
    id,
}: {
    title: string;
    children: ReactNode;
    id?: string;
}) {
    return (
        <section className={styles.section} id={id}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    );
}
