import './App.css';
import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {

        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <header className="App-header">
            <div>
                <SearchBar onSubmit={handleSubmit} />
                <ImageList images={images} />
            </div>
        </header>
    );
}

export default App;