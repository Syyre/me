import Image from "next/image";
import { Alan_Sans } from "next/font/google";
import * as motion from "motion/react-client";

const alanSans = Alan_Sans({
  variable: "--font-alan-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-12 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-5 text-center">
          <motion.div
            whileHover={{
              scale: 1.2,
              textDecoration: "underline",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
            }}
          >
            <p className={`${alanSans.className} text-2xl`}>
              Mathushanth Shanmugam
            </p>
          </motion.div>
          <p
            className={`pr-5 ${alanSans.className} text-left text-md font-light text-gray-800`}
          >
            I am an aspiring software developer, recently graduated from The
            University Of New South Wales specializing in Computer Science,
            favouring towards Backend Development. I have a strong passion for
            creating efficient and scalable software solutions to problems we
            face everyday! <br />
            <br /> Have a look at my projects below!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {/* div should be a box for each project */}
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            <a href="https://github.com/unsw-cse-comp99-3900/capstone-project-25t3-3900-w12a-date/settings">
              <div className="bg-gray-100 br-10 rounded-2xl">
                <h1 className="text-2xl font-bold px-5 py-2">Invoice Mate</h1>
                <p className="text-sm px-2 pb-4 pl-4">
                  InvoiceMate enables small and medium enterprises to
                  efficiently create, validate, and deliver electronic invoices
                  in compliance with Australian E-invoicing standards.This
                  platform aims to replace traditional, cumbersome invoicing
                  methods with a user-friendly, efficient, and accurate
                  solution.
                </p>
              </div>
            </a>
          </motion.div>
          <div className="col-span-1">
            <p>Project 1</p>
          </div>{" "}
          <div className="col-span-1">
            <p>Project 1</p>
          </div>
          <div className="col-span-1">
            <p>Project 1</p>
          </div>{" "}
        </div>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Learning
          </a>{" "}
          center.
        </p>
        {/* </div> */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
