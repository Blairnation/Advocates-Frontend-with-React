import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AdvocatePage = () => {
  const params = useParams()
  const username = params.username

  const [advocate, setAdvocate] = useState(null)

   useEffect(() => {
    getData();
   }, [username]);

   let getData = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/advocate-list/${username}`)
    console.log('RESPONSE:', response)
    setAdvocate(response.data)
   }

  return (
    <>
      {advocate &&(
        <div className='advocate__preview__wrapper'>
            <img className='advocate__preview__image' src={advocate.profile_pic ? advocate.profile_pic:advocate.pic} alt='Advocate profile pic' />
          <strong>{advocate.username}</strong>
          <p><small>{advocate.bio}
          <br/>
          <strong>Company: </strong>{advocate.company.name}. {advocate.company.bio}
          </small>
          </p>
        </div>
      )}
    </>    
  )
}

export default AdvocatePage
