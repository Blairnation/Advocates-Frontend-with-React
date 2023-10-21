import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
   const [advocates, setAdvocates] = useState([])

   useEffect(() => {
    getData()
   }, [])

   let getData = async (query = '') => {
    let response = await axios.get(`http://127.0.0.1:8000/advocate-list/?query=${query}`)
    console.log('RESPONSE:', response)
    setAdvocates(response.data)
   }

   let searchData = (e) => {
    e.preventDefault()
    let query = e.target.query.value
    getData(query)
   }

  return (
    <div className='main--container'>
      <h2>Search {advocates.length} developer advocates found by @blairnation webscraper and the TwitterAPi. </h2>
      <p>Developer advocates found</p>
      
      <div className='form--wrapper'>
        <form onSubmit={searchData} className='search_form'>
          <input type='text' name='query' placeholder='Search Advocates...' />
          <input type='submit' value='search' className='btn--primary' />
        </form>
      </div>

      <div className='advocate__list'>
        {advocates.map((advocate, index) =>(
          <div className='advocate__preview__wrapper' key={index}>
            <div className='advocate__preview__header'>
              <Link to={`/advocate/${advocate.username}`}>
                <img className='advocate__preview__image' src={advocate.profile_pic ? advocate.profile_pic:advocate.pic} alt='Advocate profile pic' />
              </Link>
              <div>
                 <strong>{advocate.name}</strong>
                 <br/>
                 <a href={advocate.twitter}>@{advocate.username}</a>
              </div>
            </div>
            <small className='bio--preview'>{advocate.bio}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
