import { useEffect, useState } from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import ImageGrid from '../components/ImageGrid/ImageGrid';

function Gallery() {
    const [key, setKey] = useState('');
    const [imageGridData, setImageGridData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState('');

    function handleSearch(event) {
        if (event.target.value.trim()) {
            setKey(event.target.value);
        }
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            requestImages(key);
        }, 500);

        return () => clearTimeout(delay);
    }, [key]);

    function requestImages(key) {
        setIsLoading(true);
        if (key.trim().length === 0) key = 'random';
        fetch(`search/${key}`, {
            headers: {
                accepts: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setImageGridData(data.photos.photo);
                setIsLoading(false);
            })
            .catch((error) => setHasError('Somthing Went Wrong!'));
    }
    return (
        <>
            <AppHeader handleSearch={handleSearch}></AppHeader>
            <ImageGrid
                imageGridData={imageGridData}
                isLoading={isLoading}
                hasError={hasError}
            />
        </>
    );
}

export default Gallery;
