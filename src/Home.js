import './styles/Home.css'

const Home = () => {
    return ( 
        <div className="container1">
            <header>
                <nav>
                    <i>Games</i>
                    <div className='game-box'>
                        <div className='roblox top inline'>
                            <p className='texts'>ROBLOX</p>
                            <hr />
                        </div>

                        <div className='roblox top inline'>
                            <p className='texts'>VALORANT</p>
                            <hr />
                        </div>

                        <div className='roblox top inline'>
                            <p className='texts'>FORTNITE</p>
                            <hr />
                        </div>
                    </div>
                </nav>
            </header>
            <h1 className='game-names'>ROBLOX</h1>
            <div className="games-container">
                <div className='content-container choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>
            </div>

            <h1 className='game-names'>VALORANT</h1>
            <div className="games-container">
                <div className='content-container choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>
            </div>

            <h1 className='game-names'>FORTNITE</h1>
            <div className="games-container">
                <div className='content-container choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>

                <div className='content-container not-choosed'>

                </div>
            </div>
        </div>
     );
}
 
export default Home;