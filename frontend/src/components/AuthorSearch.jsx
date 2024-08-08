import { useContext, useState } from 'react';
import { allAuthorSlugMap} from "../assets/public_assets.js";
import { AppContext } from "../context/AppContext.jsx";
import { NavLink } from 'react-router-dom';

const AuthorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const authors = allAuthorSlugMap.map(person => person.name);
  const { setSelectedAuthor } = useContext(AppContext);

  const filteredPeople = authors.filter(person =>
    person.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAuthor = (person) => {
    setSelectedAuthor(person);
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className='font-bold text-lg my-2'>Author Search</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-80"
      />
      {searchTerm && (
        <NavLink to="/selected" className="w-80 max-h-40 overflow-y-auto border border-gray-300 rounded bg-white list-none">
          {filteredPeople.map((person, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectAuthor(person)}
            >
              {person}
            </li>
          ))}
        </NavLink>
      )}
    </div>
  );
};

export default AuthorSearch;
