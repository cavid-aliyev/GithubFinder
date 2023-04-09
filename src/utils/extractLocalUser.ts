import { IGithubUser } from "../types/user";

export const extractLocalUser = (user: IGithubUser) => ({
  login: user.login,
  id: user.id,
  avatar_url: user.avatar_url,
  name: user.name,
  company: user.company,
  blog: user.blog,
  location: user.location,
  bio: user.bio,
  twitter_username: user.twitter_username,
  public_repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created_at: user.created_at,
});
