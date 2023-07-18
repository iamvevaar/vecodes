import React from 'react'
import './styles/Home.css'

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <img src="https://th.bing.com/th/id/OIG.WKdfOShnWGZsOwGRYsgi?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="" className="logo" />
          <div className='inputs'>
            <p>Paste Invitation ROOM ID</p>
            <input type="text" placeholder="ROOM ID" />
            <br />
            <input type="text" placeholder="USERNAME" />
            <button className='submit'>JOIN</button>
          </div>
          <div className="label">
            <p>If you dont have an invite then create <a href="#vevaar">New Room</a></p>
          </div>
        </div>
        <footer>
          <h4>Build With 💙 from VEVAAR</h4>
        </footer>
      </div>
    </div>
  )
}

export default Home