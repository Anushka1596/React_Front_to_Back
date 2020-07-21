//Initial State and actions

import React , {useReducer} from "react";
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from "./githubReducer";
import {SEARCH_USERS , SET_LOADING ,CLEAR_USER ,GET_USER , GET_REPOS}  from '../types';

const GithubState = props => {
  const initialState ={
    users:[],
    user:{},
    loading:false,
    repos:[]
  }

  const [state , dispatch] = useReducer(GithubReducer , initialState)

  //Search User
  const searchUser = async text => {
    setLoading()
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

   dispatch({type:SEARCH_USERS , payload:res.data.items})
  }

  //Get USer
  const getUser = async (username)=>{
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({type:GET_USER, payload: res.data})
  }

  //Get Repos
  const getUsersRepos = async (username) =>{
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({type:GET_REPOS , payload:res.data})
  }

  //Clear User
  const clearUsers =() => dispatch({type:CLEAR_USER})

  //Set Loading
  const setLoading = () => dispatch({type:SET_LOADING });



  return <GithubContext.Provider
    value={{
    users: state.users,
    user: state.user,
    repos: state.repos ,
    loading:state.loading, searchUser, clearUsers, getUser, getUsersRepos}} > {props.children}
  </GithubContext.Provider>

}

export default GithubState;
