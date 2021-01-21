import { Router, Request, Response } from "express"
import auth from "../middleware/auth"

import Post from "../entities/Post"
import Sub from "../entities/Sub"

const createPost = async (req: Request, res: Response) => {
  const { title, body, sub } = req.body

  const user = res.locals.user

  if (title.trim() === "") {
    return res.status(400).json({ title: "Title must not be empty" })
  }

  try {
    const subRecord = await Sub.findOneOrFail({ name: sub })

    const post = new Post({
      title,
      body,
      user,
      sub: subRecord,
    })
    await post.save()
    return res.json(post)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: "Someting went wrong" })
  }
}

const getPosts = async (_: Request, res: Response) => {
  try {
    const posts = await Post.find({
      order: { createdAt: "DESC" }, //! Last created post comes first
      relations: ["sub"], //! Relation with sub
    })
    return res.json(posts)
  } catch (err) {
    console.log(err)
    return res.json({ error: "Somthing went wrtong getPosts" })
  }
}

const router = Router()

router.post("/", auth, createPost)
router.get("/", auth, getPosts) // PUBLIC NO MIDDLEWARE
export default router
