import HomeSpoitlight from './HomeSpoitlight';
import MainArea from './MainArea';

const Home = () => {
    return (
        <div>
            <HomeSpoitlight />
            <MainArea type="Trending" />
            <MainArea type="TV Series" />
            <MainArea type="Upcoming" />
            <MainArea type="Popular movies on this month" />
        </div>
    );
};

export default Home;
