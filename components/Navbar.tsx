import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 shadow-md">
      <div className="flex items-center gap-20">
        <Image src="/logo.png" alt="logo" width={70} height={60} />
        <div className="hiden md:flex gap-6">
          <h2 className="cursor-pointer hover:bg-gray-100 p-2 rounded-md font-medium">
            Home
          </h2>
          <h2 className="cursor-pointer hover:bg-gray-100 p-2 rounded-md font-medium">
            History
          </h2>
          <h2 className="cursor-pointer hover:bg-gray-100 p-2 rounded-md font-medium">
            Help
          </h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
