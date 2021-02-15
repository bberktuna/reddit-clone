import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import useSWR from "swr"
import Axios from "axios"
import { Fragment, useEffect, useState } from "react"
import Image from "next/image"

import { useAuthState, useAuthDispatch } from "../context/auth"
import { User } from "../../types"
import { classNames } from "classnames"
export default function LeftMenu() {
  const { data: user, error } = useSWR<User>("/auth/me")
  const { authenticated } = useAuthState()
  const dispatch = useAuthDispatch()

  return (
    <div className="hidden mr-6 md:block w-80">
      {authenticated && user ? (
        <div className="py-2">
          <Link href={`/u/${user.username}`}>
            <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
              <a className="flex flex-row items-center">
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  alt="user profile"
                  className="w-8 h-8 border-white rounded-full"
                />
                <span className="ml-2 font-bold ">{user.username}</span>
              </a>
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex-col hidden mr-6 md:block w-80 ">
          <Link href="/login">
            <div className="p-4 bg-white rounded cursor-pointer hover:bg-gray-200">
              <a className="">
                <i className="pl-2 pr-3 fas fa-search "></i>
                <span className="font-bold "> Profile </span>
              </a>
            </div>
          </Link>
        </div>
      )}

      <div className="py-2">
        <Link href="/">
          <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
            <a className="flex flex-row items-center ">
              <i className="ml-2 far fa-bell"></i>
              <span className="ml-2 font-bold ">Notifications</span>
            </a>
          </div>
        </Link>
      </div>
      <div className="py-2">
        <Link href="/">
          <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
            <a className="flex flex-row items-center">
              <span className="ml-2 font-bold ">Messages</span>
            </a>
          </div>
        </Link>
      </div>
      <div className="py-2">
        <Link href="/">
          <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
            <a className="flex flex-row items-center">
              <span className="ml-2 font-bold ">Explore</span>
            </a>
          </div>
        </Link>
      </div>
      <div className="py-2">
        <Link href="/">
          <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
            <a className="flex flex-row items-center">
              <span className="ml-2 font-bold ">Bookmarks</span>
            </a>
          </div>
        </Link>
      </div>
      <div className="py-2">
        <Link href="/">
          <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
            <a className="flex flex-row items-center">
              <span className="ml-2 font-bold ">Subs</span>
            </a>
          </div>
        </Link>
      </div>
      <div className="py-2">
        <Link href="/">
          <div className="justify-center p-4 bg-white rounded cursor-pointer hover:bg-gray-200 item-center">
            <a className="flex flex-row items-center">
              <span className="ml-2 font-bold ">Settings</span>
            </a>
          </div>
        </Link>
      </div>
    </div>
  )
}
/*
;
  <div className="flex-row bg-white rounded ">
    <div className="p-4 border-b-2">
      <i className="pl-4 pr-3 text-gray-500 fas fa-search "></i>
      <p className="text-lg font-semibold ">Profile</p>
    </div>
  </div>
</div>
*/
