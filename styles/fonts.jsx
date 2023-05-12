import { Karla, Inter } from "next/font/google";

/* Heading, Titles Font */
const karla = Karla({ weight: "500", subsets: ["latin"] });

/* Body, Paragraphs Font */
const inter = Inter({ weight: ["300", "500"], subsets: ["latin"] });

export { karla, inter };
