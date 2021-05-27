import Image from '../pool.jpg'


function Home(){
    return(
        <div className="homePage">
            <h2 className="tagline">Find the best place to live and work! <br/> Explore quality of life data, check the weather and find friends using our app before your move!</h2>
            <img src={Image} className="bg"/>
        </div>
    );
}

export default Home;
