import axios from 'axios';
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
const SearchPage = () => {
  const {id} = useParams();
  const spotify = {
    ClientId: '37816fbbd4124862afb5dd66fe618ab9',
    ClientSecret: 'd7f1a8d7b53b417e83675ea60abb0a8b',
  }
  const token = JSON.parse(localStorage.getItem('access_token'));
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/search?q=${id}&type=album,track`, {
      // method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
    return () => {
      
    }
  }, [])
  
  return (
    <div>SearchPage {id}</div>
  )
}

export default SearchPage