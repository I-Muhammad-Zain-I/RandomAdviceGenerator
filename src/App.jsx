import { useEffect, useState } from 'react';
import './styles/App.css';
import { getAdviceData, getAdviceImageData } from './adapters/axios/adviceInterface';
import Advice from './components/advice';
function App() {
    
    const [advice, setAdvice] = useState('You will always regret the round of Tequila');
    const [isLoading, setIsLoading] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [imgUrl, setImgUrl] = useState('../assets/city.jpg');
    
    const forgeQuery = (quote) => {
        const stopWords = ['the', 'of', 'and', 'to', 'a', 'in', 'that', 'is', 'it', 'about', 'as', 'you', 'get'];
        const words = Array.from(new Set(quote.split(' ')));
        
        const query = words.filter((word) => !stopWords.includes(word));
        console.log(query)
        return query[(query.length/2)];
    }
    
    const callGetAdviceData = async (e) => {
        const callResponse = await getAdviceData({setIsLoading});
        console.log(callResponse);
        setAdvice(callResponse);

        let img_keyword = forgeQuery(callResponse);
        const imgResponse = await getAdviceImageData({img_keyword});
        setImgUrl(imgResponse)
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 500)
    }
    useEffect(() => {
       callGetAdviceData();
    }, []) 

  
    return (

            <Advice 
                callGetAdviceData={callGetAdviceData}
                isLoading ={isLoading}
                isDisabled = {isDisabled}
                advice={advice} 
                imgUrl = {imgUrl}
            />
    )
}

export default App;
