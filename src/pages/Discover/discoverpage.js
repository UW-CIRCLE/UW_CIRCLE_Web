import { Link} from 'react-router-dom';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import './discoverpage.css';

function DiscoverPage() {
    // const navigate = useNavigate();
    
    const newsFeeds = [
        {
            id: 1, 
            title: 'Get travel signature before you return to the US!', 
            subtitle: 'Travel signature is valid for 1 year. Check your I-20 or DS-2029', 
            image: image1
        },
        {
            id: 2, 
            title: 'Drop a course without transcript entry before 7/3 for SU23', 
            subtitle: 'Check the UW academic calender for more information', 
            image: image2
        },
        {
            id: 3, 
            title: 'UW is no.63 in the world according to QS World University Ranking 2024', 
            subtitle: 'UW is up 22 places from last year\'s QS ranking',
            image: image3
        },
        {
            id: 4, 
            title: 'Class of 2027: Join Regional Connection Group (RCG) to embark our UW journey', 
            subtitle: 'RCG groups are on WhatsApp, Kakao, Line, WeChat, and instagram',
            image: image4
        },
        {
            id: 5, 
            title: 'Maintaining full-time student status in summer? Register for 12 credits!', 
            subtitle: 'Int\'l stduents have to comply with the 12-credit rule for visa purposes',
            image: image5
        }
    ]

    const NewsCard = ({ id, title, subtitle, image}) => (
        <div className='news-feed-item' key={id}>
            <div className="news-content">
                <h2 className="news-title">{title}</h2>
                <p className="news-subtitle">{subtitle}</p>
            </div>
            <div className="news-image-container">
                <img src={image} alt={title} className="news-image"/>
            </div>
        </div>
      );
    
    return (   
        <div>
             <div className="discoverPage-Header-Section">
                <h1 className="discoverPage-header">Int'l Students News Channel</h1>
            </div>
            <div className='news-feed-list'>
                {newsFeeds.map(feed => (
                    <NewsCard
                        key={feed.id}
                        id={feed.id}
                        title= {feed.title}
                        subtitle= {feed.subtitle}
                        image= {feed.image}
                    />
                ))}
            </div>
            <nav className="bottom-nav">
                <Link to="/" className="nav-item">🏠 Home</Link>
                <Link to="/todo" className="nav-item">📝 Todo List</Link>
                <Link to="/discover" className="nav-item">👤 Discover</Link>
                <Link to="/more" className="nav-item">⚙️ More</Link>
            </nav>
        </div>
    );
}

export default DiscoverPage;