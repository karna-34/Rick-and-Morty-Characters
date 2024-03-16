import React, { useState, useEffect } from 'react';
import Header from './pages/header'; // Assuming you have a Header component defined
import './Index.css'; // Make sure to adjust the path if necessary

const CardContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchVal, setSearchVal] = useState('');  
const[status,setstatus]=useState("all"); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character/?page=1');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await res.json();
                setCharacters(result.results);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange =  (e) => {
        setSearchVal(e.target.value);
      }
      const statusChange  =  (e) => {
        setstatus(e.target.value);
      }  

    return (
        <div>
            <Header handleChange={handleChange} searchVal={searchVal} statusChange={statusChange} statusVal={status}/>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div className="card-container">
                    {characters.filter(item=>item?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())).filter(character =>
        status=== "all" ? true : character.status === status
      ).map(character => {
                       return <div key={character.id} className="card">
                            <img src={character.image} alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">Status: {character.status}</p>
                                <p className="card-text">Species: {character.species}</p>
                                <p className="card-text">Gender: {character.gender}</p>
                            </div>
                        </div>
})}
                </div>
            )}
        </div>
    );
};

export default CardContainer;
