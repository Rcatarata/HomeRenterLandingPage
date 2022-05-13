export default function Hero() {
  return (
    <div className="hero">
        <div className="left--hero">
            <img className='home1' src="https://images.unsplash.com/photo-1519999933293-fb5e79c3e9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
        <div className="right--hero">
            <h1>Discover the ideal property here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, qui repellat! Blanditiis officiis facilis nemo architecto quos illo tempora hic?</p>
            <div className="white--container">
                <div className="circle">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <p>Location</p>
                <div className="circle">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </div>
                <p>Type</p>
                <button className="search--button">Search</button>
            </div>
            <div className="bottom--hero">
                <div>
                    <p>280+</p>
                    <p className="reviewer">Google Reviews</p>
                </div>
                <div>
                    <p>280+</p>
                    <p className="reviewer">Google Reviews</p>
                </div>
                <div>
                    <p>280+</p>
                    <p className="reviewer">Google Reviews</p>
                </div>
            </div>
        </div>
    </div>
  )
}
