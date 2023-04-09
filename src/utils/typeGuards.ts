import { IGithubUser } from "../types/user";

export const isGithubUser = (user: IGithubUser) => "id" in user;
