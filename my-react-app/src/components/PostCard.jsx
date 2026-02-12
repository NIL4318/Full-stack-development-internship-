import VehicleCard from '../components/VehicleCard'; 



function PostCard({Title, body}) {
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default VehicleCard;