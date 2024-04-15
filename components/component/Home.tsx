'use client'

import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export function Home() {
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
            placeholder="Search movies..."
            type="text"
          />
          <Button className="ml-2" variant="default">
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <div className="px-4 max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Top Movies</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <Link className="absolute inset-0 z-10" href="#" />
            <div className="grid gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  alt="Movie Poster"
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
                <h2 className="text-xl font-semibold leading-none">The Midnight Sky</h2>
                <p className="text-sm font-normal leading-none text-gray-100 dark:text-gray-800">Sci-Fi, Drama | 1h 58m</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Director</h2>
                <p className="text-sm font-normal leading-none">George Clooney</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Country</h2>
                <p className="text-sm font-normal leading-none">United States</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Stars</h2>
                <p className="text-sm font-normal leading-none">George Clooney, Felicity Jones, David Oyelowo</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Release Date</h2>
                <p className="text-sm font-normal leading-none">December 23, 2020</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Available on</h2>
                <div className="flex items-center gap-2">
                  <TvIcon className="w-6 h-6" />
                  <VideoIcon className="w-6 h-6" />
                  <TvIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
            <CardContent className="flex justify-end p-4">
              <Button>View</Button>
            </CardContent>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10" href="#" />
            <div className="grid gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  alt="Movie Poster"
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
                <h2 className="text-xl font-semibold leading-none">Movie Title</h2>
                <p className="text-sm font-normal leading-none text-gray-100 dark:text-gray-800">Genre | Duration</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Director</h2>
                <p className="text-sm font-normal leading-none">Director Name</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Country</h2>
                <p className="text-sm font-normal leading-none">Country Name</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Stars</h2>
                <p className="text-sm font-normal leading-none">Star 1, Star 2, Star 3</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Release Date</h2>
                <p className="text-sm font-normal leading-none">Release Date</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Available on</h2>
                <div className="flex items-center gap-2">
                  <TvIcon className="w-6 h-6" />
                  <VideoIcon className="w-6 h-6" />
                  <TvIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
            <CardContent className="flex justify-end p-4">
              <Button>View</Button>
            </CardContent>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10" href="#" />
            <div className="grid gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  alt="Movie Poster"
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
                <h2 className="text-xl font-semibold leading-none">Movie Title</h2>
                <p className="text-sm font-normal leading-none text-gray-100 dark:text-gray-800">Genre | Duration</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Director</h2>
                <p className="text-sm font-normal leading-none">Director Name</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Country</h2>
                <p className="text-sm font-normal leading-none">Country Name</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Stars</h2>
                <p className="text-sm font-normal leading-none">Star 1, Star 2, Star 3</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Release Date</h2>
                <p className="text-sm font-normal leading-none">Release Date</p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-base font-semibold leading-none">Available on</h2>
                <div className="flex items-center gap-2">
                  <TvIcon className="w-6 h-6" />
                  <VideoIcon className="w-6 h-6" />
                  <TvIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
            <CardContent className="flex justify-end p-4">
              <Button>View</Button>
            </CardContent>
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


function TvIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}


function VideoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
