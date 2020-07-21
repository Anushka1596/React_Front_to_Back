import React, {useContext} from "react";
import RepoItem from "./repo";
import GithubContext from "../../context/github/githubContext";

const Repos = ()=>{
  const githibContext = useContext(GithubContext)
  const {repos} = githibContext;
  return repos.map(repo=> <RepoItem key={repo.id} repo={repo}/>)
}

export default Repos
