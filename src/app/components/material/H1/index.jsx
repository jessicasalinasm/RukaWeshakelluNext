import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400']});


export default function H1({Children}) {
    return (
    <h1 className={bebas.className}>{Children}</h1>
    )
}
