import axios from "axios";

const searchImages = async (term)  => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID TVfWWsUfhTG0FBUujP98RlQF7jk8O-QWlSkC97leyIM'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;