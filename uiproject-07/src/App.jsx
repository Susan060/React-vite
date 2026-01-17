import React from 'react'
import Section1 from './components/Section1/section1'
import Section2 from './components/Section2/section2'
const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661638461961-d8dbc7e886d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdvcmtpbmclMjBwcm9mZmVzc2lvbmFsfGVufDB8fDB8fHww',
      color:'blue',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661749342073-a28c018a2929?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHdvcmtpbmclMjBwcm9mZmVzc2lvbmFsfGVufDB8fDB8fHww',
      color:'orange',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661589915345-51d6f69f4b1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvcmtpbmclMjBwcm9mZmVzc2lvbmFsfGVufDB8fDB8fHww',
      color:'skyblue',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
      color:'seagreen',
      intro: '',
      tag: 'Average'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1675272833807-fb6d8293210c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
      color:'pink',
      intro: '',
      tag: 'Beautifull'
    }]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
