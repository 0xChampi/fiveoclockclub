import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faFreebsd } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
          return (
<>
                  <nav className="relative flex flex-wrap items-center justify-between px-2 bg-teal-500 mb-8">
                      <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
                          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                              <a
                                  className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                                  href="#pablo"
                                  >
                                  <img width="80" height="220" src="/fiveoclock.png"></img>
                              </a>
                              <button
                                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                  type="button"

                                  >
                                  <i className="fas fa-bars"></i>
                              </button>
                          </div>
                          <div
                              className={
                                  "lg:flex flex-grow items-center"
                              }
                              id="example-navbar-danger"
                              >
                              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                  <li className="nav-item">
                                      <a
                                          className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
                                          href="#popo"
                                          >
                                          <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Events</span>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a
                                          className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
                                          href="#pablo"
                                          >
                                          <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a
                                          className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
                                          href="#pablo"
                                          >
                                          <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Team</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
                  <body>
                      <div className="flex flex-grid justify-center padding-2">

                          <img src="/savio.jpeg"></img>
                      </div>
                      <div className="flex flex-wrap justify-between relative mx-8 my-8">

                          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our last event in SF</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Check out our last event we hosted in San Francisco with leaders in the growth</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                              Read more
                              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                          </div>

                          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GDC 2023!</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Get ready for our next huge event happening in California. </p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                              Read more
                              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                          </div>

                          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next Episodes</h5>
                          </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Catch up on what's coming up next in our journey!Catch up on what's coming up next in our journey!Catch up on what's coming up next in our journey!Catch up on what's coming up next in our journey!Catch up on what's coming up next in our journey!Catch up on what's coming up next in our journey!</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                              Read more
                              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                          </div>
                      </div>
                <div className="timeline flex flex-wrap justify-center mx-12 my-12">
                      <ol class="items-center sm:flex">
                      <li class="relative mb-6 sm:mb-0">
                          <div class="flex items-center">
                              <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                          </div>
                          <div class="mt-3 sm:pr-8">
                              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">First event</h3>
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
                              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                          </div>
                      </li>
                      <li class="relative mb-6 sm:mb-0">
                          <div class="flex items-center">
                              <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                          </div>
                          <div class="mt-3 sm:pr-8">
                              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">NYC Event</h3>
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
                              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                          </div>
                      </li>
                      <li class="relative mb-6 sm:mb-0">
                          <div class="flex items-center">
                              <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                          </div>
                          <div class="mt-3 sm:pr-8">
                              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">GDC 2023</h3>
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
                              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                          </div>
                      </li>
                      </ol>
</div>
                      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
                      <div class="md:flex md:justify-between">
                          <div class="mb-6 md:mb-0">
                              <a href="https://flowbite.com/" class="flex items-center">
                                  <img src="/fiveoclock.png" class="mr-3 h-8" alt="5 O Clock Club Logo" />
                                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">5 O'Clock Club</span>
                              </a>
                          </div>
                          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                              <div>
                                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                  <ul class="text-gray-600 dark:text-gray-400">
                                      <li class="mb-4">
                                          <a href="https://flowbite.com/" class="hover:underline">5 O'Clock Club™</a>
                                      </li>
                                      <li>
                                          <a href="https://tailwindcss.com/" class="hover:underline">Jobs</a>
                                      </li>
                                  </ul>
                              </div>
                              <div>
                                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                  <ul class="text-gray-600 dark:text-gray-400">
                                      <li class="mb-4">
                                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                                      </li>
                                      <li>
                                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                                      </li>
                                  </ul>
                              </div>
                              <div>
                                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                  <ul class="text-gray-600 dark:text-gray-400">
                                      <li class="mb-4">
                                          <a href="#" class="hover:underline">Privacy Policy</a>
                                      </li>
                                      <li>
                                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                      <div class="sm:flex sm:items-center sm:justify-between">
                          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">5 O'Clock Club™</a>. All Rights Reserved.
                          </span>
                          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                  <span class="sr-only">Facebook page</span>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                                  <span class="sr-only">Instagram page</span>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                  <span class="sr-only">Twitter page</span>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                  <span class="sr-only">GitHub account</span>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                  <span class="sr-only">Dribbbel account</span>
                              </a>
                          </div>
                      </div>
                      </footer>

                  </body>
                  </>
                  );
}
