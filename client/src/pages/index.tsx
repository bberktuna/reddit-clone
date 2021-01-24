import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Axios from "axios"
import Link from "next/link"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import useSWR from "swr"

import { Post } from "../../types"
import PostCard from "../components/PostCard"
//import { GetServerSideProps } from "next" For SSR
dayjs.extend(relativeTime)

export default function Home() {
  //destructure the posts for SSR

  const { data: posts } = useSWR("/posts")

  return (
    <div className="pt-12">
      <Head>
        <title>reddit: the front page of the internet</title>
        {/*<link rel="icon" href="/reddit.svg" />*/}
      </Head>
      <div className="container flex pt-4">
        {/* Posts feed*/}
        <div className="white-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar*/}
      </div>
    </div>
  )
}
/*
Server Side Rendering
export const getStaticProps: GetServerSideProps = async (context) => {
  try {
    const res = await Axios.get("/posts")

    return { props: { posts: res.data } }
  } catch (err) {
    return { props: { error: "Something went wrong" } }
  }
}
*/
