import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-28 text-center">
            We are the most straightforward URL shortener in the world. Most of the URL shorteners will track you or ask you to provide your details for login. We understand your needs and hence we created this URL shortener.
          </p>
          <div className='flex gap-3 justify-start text-white font-bold'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1'>Try now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1'>Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt='Vector Image' src={"/vector.jpg"} fill={true} />
        </div>

      </section>
    </main>

  );
}
