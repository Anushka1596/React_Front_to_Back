import React, {useContext, useState} from "react";
import PropTypes from 'prop-types';
import GithubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/AlertContext";

const Search = ({setAlert}) =>{
  const githubContext = useContext(GithubContext);
  const AlertContext = useContext(alertContext)

 const [text , setText] = useState('');

  const onChange = (e) => setText(e.target.value)

  const onSubmit = (e) =>{
    e.preventDefault();
      if(text == ''){
        AlertContext.setAlert('Please enter something', 'light')
      }else{
        githubContext.searchUser(text);
       setText('')
      }
    }

    return(
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" name="text" placeholder="Search users" value={text}
          onChange={onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {githubContext.users.length > 0 &&
        (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}> Clear</button>) }

      </div>
    )
}

export default Search;
