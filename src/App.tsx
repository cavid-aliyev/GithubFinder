import React from "react";
import { defaultUser } from "./types";
import { IGithubError, IGithubUser } from "./types/user";
import { Container, Header, Search, UserCard } from "./components";
import { isGithubUser } from "./utils/typeGuards";
import { extractLocalUser } from "./utils/extractLocalUser";
const BASE_URL = "https://api.github.com/users/";

const App: React.FC = () => {
  const [user, setUser] = React.useState<IGithubUser | null>(defaultUser);

  const fethUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as IGithubUser;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fethUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};

export default App;
