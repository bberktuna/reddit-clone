import Link from "next/link"
import React, { Fragment } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import { Post } from "./../../types"

dayjs.extend(relativeTime)

interface PostCardProps {
  post: Post
}
const ActionButton = ({ children }) => {
  return (
    <div className="px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200">
      {children}
    </div>
  )
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div key={post.identifier} className="flex mb-4 bg-white rounded">
      {/* Vote section */}
      <div className="w-10 py-3 text-center bg-gray-200 rounded-l">
        {/* Upvote */}
        <i className="w-6 mx-auto text-gray-400 rounded cursor-pointer fas fa-arrow-up hover:bg-gray-300 hover:text-red-500"></i>

        {/* Vote Count */}
        <p className="text-xs font-bold">{post.voteScore} </p>

        {/* Downvote */}
        <i className="w-6 mx-auto text-gray-400 rounded cursor-pointer fas fa-arrow-down hover:bg-gray-300 hover:text-blue-500"></i>
      </div>

      {/* Post data section */}
      <div className="w-full p-2">
        <div className="flex items-center">
          <Link href={`/r/${post.subName}`}>
            <Fragment>
              <img
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                className="w-6 h-6 mr-1 rounded-full cursor-poiner"
              />
              <a href="" className="text-xs font-bold hover:underline">
                /r/{post.subName}
              </a>
            </Fragment>
          </Link>
          <p className="text-xs text-gray-500">
            <span className="mx-1">•</span>
            Posted by
            <Link href={`/u/${post.username}`}>
              <a className="mx-1 hover:underline">/u/{post.username}</a>
            </Link>
            <Link href={`/r/${post.subName}/${post.identifier}/${post.slug}`}>
              <a className="mx-1 hover:underline">
                {dayjs(post.createdAt).fromNow()}
              </a>
            </Link>
          </p>
        </div>
        <Link href={post.url}>
          <a className="my-1 text-lg font-medium">{post.title} </a>
        </Link>
        {post.body && <p className="my-1 text-sm"> {post.body} </p>}

        <div className="flex">
          <Link href={post.url}>
            <a>
              <ActionButton>
                <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                <span className="font-bold">{post.commentCount} </span>
              </ActionButton>
            </a>
          </Link>
          <a>
            <ActionButton>
              <i className="mr-1 fas fa-share fa-xs"></i>
              <span className="font-bold">Share</span>
            </ActionButton>
          </a>
          <a>
            <ActionButton>
              <i className="mr-1 fas fa-bookmark fa-xs"></i>
              <span className="font-bold">Save</span>
            </ActionButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostCard
