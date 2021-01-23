export interface Post {
  identifier: string
  title: string
  slug: string
  subName: string
  createdAt: string
  updatedAt: string
  username: string
  body?: string
  // virtual fields
  url: string
}
