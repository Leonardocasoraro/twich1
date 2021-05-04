import React, { useEffect} from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';
import {useState} from 'react'

const Navbar = (props) => {
  const { loading, error, user } = useProfile();
  const [data, setData] = useState([]);

  getTopGames({after: '',before: '',first: 10,width: '188',height: '250',})
  .then(response => setData(response.data))
  
  function getTopgames(){
    props.setTopGames(data)
  }

  function setCat(){
    searchCategories({query:'/'}).then(console.log)
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__item}>
        <a onClick={setCat} href="#">Sfoglia categorie</a>
        <a onClick={getTopgames} href="#">Top games</a>
      </div>

      <div className={classes.navbar__item}>
        {!loading ? (
          <img
            src={user.profile_image_url}
            className={classes.avatar}
            alt="Profile"
            width={60}
          />
        ) : (
          <div className={classes.avatar} style={{ width: 60, height: 60 }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;