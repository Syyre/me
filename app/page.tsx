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
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-32 px-12 bg-white dark:bg-black sm:items-start gap-24`">
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
        <div className="grid grid-cols-3 gap-10">
          {/* div should be a box for each project */}
          <motion.div
            whileHover={{
              scale: 1.05,
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
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  Invoice Mate
                </h1>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
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
          <motion.div
            whileHover={{
              scale: 1.05,
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
            <a href="https://github.com/Syyre/MovieSearcher">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  MovieSearcher
                </h1>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Full Stack App using React for the frontend and Appwrite for
                  Backend as a Service to display latest popular movies
                  alongside a searchbar utilizing debouncing. Backend to store
                  data about movie popularity which then shows on trending
                  movies section
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
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
            <a href="https://github.com/Syyre/Subscription-Tracker">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  Subscription Tracker
                </h1>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  A RESTful backend API for managing user subscriptions. It
                  provides authentication through JWT, user management, and
                  subscription CRUD operations via MongoDB with built-in rate
                  limiting via ArcJet
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
