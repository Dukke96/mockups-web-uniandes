'use client'

import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export function Actor() {
  return (
    <>
      <header className="flex h-20 w-full items-center justify-center px-4 md:px-6">
        <Link className="mr-6" href="#">
          <FilmIcon className="h-6 w-6" />
        </Link>
        <NavigationMenu className="justify-center">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:shadow-md focus:shadow-md"
                href="#"
              >
                Movies
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:shadow-md focus:shadow-md"
                href="#"
              >
                Actors
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:shadow-md focus:shadow-md"
                href="#"
              >
                Directors
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:shadow-md focus:shadow-md"
                href="#"
              >
                Genres
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center">
          <input
            className="px-3 py-1.5 rounded-md border border-gray-200 border-gray-300 focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600 dark:bg-gray-900 dark:border-gray-800"
            placeholder="Search actors..."
            type="text"
          />
          <Button className="ml-2" variant="link">
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <div className="px-4 max-w-6xl mx-auto space-y-6">
        <div className="flex space-y-2 justify-center">
          <h1 className="text-3xl font-bold">Actor Detail</h1>
        </div>
        <div className="flex justify-center">
          <Card>
            <Link className="absolute inset-0 z-10" href="#" />
            <div className="grid gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  alt="Actor Photo"
                  className="object-cover"
                  height={600}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/600",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="grid gap-2">
                <h2 className="text-xl font-semibold leading-none">Actor Name</h2>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Born</h2>
                <p className="text-sm font-normal leading-none">Birth Date</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Nationality</h2>
                <p className="text-sm font-normal leading-none">Country</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Known For</h2>
                <p className="text-sm font-normal leading-none">Famous Movies</p>
              </div>
              <div className="grid gap-2 pb-8">
                <h2 className="text-base font-semibold leading-none">Biography</h2>
                <p className="text-sm font-normal leading-none">Biography...</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

function FilmIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
