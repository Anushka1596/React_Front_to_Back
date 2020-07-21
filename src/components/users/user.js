import React, {Fragment, useContext, useEffect} from "react";
import Spinner from "../layouts/spinner";
import {Link} from "react-router-dom";
import Repos from "../repos/repos";
import GithubContext from "../../context/github/githubContext";

const User = ({match}) =>{
  const githubContext = useContext(GithubContext);

  const {loading , getUser , user , getUsersRepos} = githubContext;

  useEffect(()=>{
   getUser(match.params.login);
    getUsersRepos(match.params.login)
    // eslint-disable-next-line
  }, [])

    const {name , avatar_url , location , bio , blog , login , html_url , followers , company,
    following , public_repos , public_gists, hireable} = user;
    if(loading)return <Spinner/>
    return(<Fragment>
      <Link to="/" className="btn btn-light">Back To Search</Link>
      Hierable : {''}
      {hireable ? <i className="fa fa-check text-success" /> : <i className="fa fa-times-circle text-danger" /> }

      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}}/>
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (<Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>)}
          <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer">
            Visit Github Profile</a>
          <ul>
            <li>
              {login && <Fragment><strong>Login :</strong> {login}</Fragment>}
            </li>
            <li>
              {company && <Fragment><strong>Company :</strong> {company}</Fragment>}
            </li>
            <li>
              {blog && <Fragment><strong>Website : </strong>{blog}</Fragment>}
            </li>
          </ul>

        </div>

      </div>
      <div className="card text-center">
        <div className="badge badge-primary"> Followers : {followers}</div>
        <div className="badge badge-success"> Following : {following}</div>
        <div className="badge badge-light"> Public Repos : {public_repos}</div>
        <div className="badge badge-dark"> Public Gists : {public_gists}</div>
      </div>
      <Repos />

    </Fragment>)
}

export default User;
