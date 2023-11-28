const BarItem = ({ name, address, formatted_phone_number, rating, user_ratings_total }) => {
    return (
        <div className="bg-gray-700 rounded mb-4 p-4 flex justify-between">
            <div>
                <h4 className="font-bold">{name}</h4>
                {!(formatted_phone_number === "") ? <p>{formatted_phone_number}</p> : <p>Non renseigné</p>}
                <p>{address}</p>
            </div>
            <div>
                <p>{rating}</p>
                <p>{user_ratings_total}</p>
            </div>
        </div>
    );
};

export default BarItem;