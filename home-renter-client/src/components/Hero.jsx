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
