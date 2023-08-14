import axios from "axios";

const getAdviceData = async ({setIsLoading}) => {
    const API_URL = 'https://api.adviceslip.com/advice';
    try {
        setIsLoading(true);
        const response = await axios.get(API_URL);
        console.log(response);
        setIsLoading(false);
        return response.data.slip.advice;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('getQuoteDate Finished Executing');
    }

}
export {getAdviceData};


const getAdviceImageData = async ({img_keyword}) => {
    const API_URL = `https://pixabay.com/api/?key=38814152-c9affe3efe60581288648ef7e&q=${img_keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    try {
        const response = await axios.get(API_URL);
        console.log(response);
        return response.data.hits[0]['largeImageURL'];
    } catch (error) {
        console.log(error);
    } finally {
        console.log('getAdviceImageData Finished Executing');
    }

}
export {getAdviceImageData};