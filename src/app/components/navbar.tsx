import { Inter } from 'next/font/google'
 import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

const Navbar = ()=> {
    let navItems = [
        {
        name:"Works",
        link: "#"
    },
    {
        name:"Blogs",
        link: "#"
    },
    {
        name:"Contact",
        link: "#"
    }
];
    return (
        <div> 
          <ul className= {`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium 
          text-[20px] gap-x-5`}>
            {
                navItems.map((item,i) =>(
                    <li key= {i}>
                        <Link href={item.link}>
                        {item.name}
                        </Link>
                    </li>
                ))
            }
            {/* <li>Works</li>
            <li>Blog</li>
            <li>Contact</li> */}
          </ul>
        </div>
    )
}
export default Navbar