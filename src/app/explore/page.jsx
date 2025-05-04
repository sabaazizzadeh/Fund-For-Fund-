import Container from "../components/container";
import ExploreHeader from "../components/Explore/exploreHeader";
import Podcast from "../components/Explore/podcast";
import Navbar from "../components/shared/navbar";

function Explore() {
    const podcasts = [1, 2, 3];
    return (
        <>   <Navbar /> 
            <Container>
                <ExploreHeader />
                <div className="flex gap-4 justify-center items-center">
                    {podcasts.map((_, index) => (
                        <Podcast key={index} />
                    ))}
                </div>
            </Container>


        </>
    );
}

export default Explore;