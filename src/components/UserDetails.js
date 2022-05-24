// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

const UserDetails = ({ user }) => {
  console.log(user)

  // useEffect(()=>{
  //     async function getUserData(){
  //         try {
  //             let userUrl = `https://dummyjson.com/users/3`
  //             const {data} = await axios.get(userUrl)
  //             setUser(data)
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }
  //     getUserData()
  // }, [])

  // const [userPost, setUserPost] = useState([])
  // useEffect(()=>{
  //     async function getUserPostData(){
  //         try {
  //             let userPostUrl = `https://dummyjson.com/users/3/posts`
  //             const {data} = await axios.get(userPostUrl)
  //             setUserPost(data.posts)
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }
  //     getUserPostData()
  // }, [])
  // let userPostCount = userPost.length
  // console.log(userPostCount);
  return (
    <div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div className='bg-emerald-200'>
          <img className='w-[50%] mx-auto' src={user.image} alt='' />
        </div>
        <div>
          <div className='py-2 border-b border-b-gray-400'>
            <h2 className='text-[#AFC2D4] text-sm'>FULL NAME</h2>
            <div className='flex text-[#051A2E] text-lg capitalize'>
              <p className='mr-1'>{user.firstName}</p>
              <p>{user.lastName}</p>
            </div>
          </div>
          <div className='py-2 border-b border-b-gray-400'>
            <h2 className='text-[#AFC2D4] text-sm'>EMAIL ADDRESS</h2>
            <p className='mr-1'>{user.email}</p>
          </div>
          <div className='py-2'>
            <h2 className='text-[#AFC2D4] text-sm'>PHONE NUMBER</h2>
            <p className='mr-1'>{user.phone}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>GENDER</h2>
            <p className='text-[#051A2E] text-lg capitalize'>{user.gender}</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>DATE OF BIRTH</h2>
            <p className='mr-1'>{user.birthDate}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div>
          <div className='pb-8'>
            <h2 className='text-[#AFC2D4] text-sm'>STREET</h2>
            <p className='text-[#051A2E] text-lg capitalize'>{user.address.address}</p>
          </div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>STATE</h2>
            <p className='text-[#051A2E] text-lg capitalize'>{user.address.state}</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>CITY</h2>
            <p className='mr-1'>{user.address.city}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>POSTS</h2>
            {/* <p className='text-[#051A2E] text-lg capitalize'>{userPostCount}</p> */}
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>COMMENTS</h2>
            <p className='mr-1'>{user.birthDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails


// address: {address: '1745 T Street Southeast', city: 'Washington', coordinates: {…}, postalCode: '20020', state: 'DC'}
// age: 50
// bank: {cardExpire: '06/22', cardNumber: '50380955204220685', cardType: 'maestro', currency: 'Peso', iban: 'NO17 0695 2754 967'}
// birthDate: "2000-12-25"
// bloodGroup: "A−"
// company: {address: {…}, department: 'Marketing', name: "Blanda-O'Keefe", title: 'Help Desk Operator'}
// domain: "slashdot.org"
// ein: "20-9487066"
// email: "atuny0@sohu.com"
// eyeColor: "Green"
// firstName: "Terry"
// gender: "male"
// hair: {color: 'Black', type: 'Strands'}
// height: 189
// id: 1
// image: "https://robohash.org/hicveldicta.png"
// ip: "117.29.86.254"
// lastName: "Medhurst"
// macAddress: "13:69:BA:56:A3:74"
// maidenName: "Smitham"
// password: "9uQFF1Lh"
// phone: "+63 791 675 8914"
// ssn: "661-64-2976"
// university: "Capitol University"
// userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
// username: "atuny0"
// weight: 75.4
// [[Prototype]]: Object