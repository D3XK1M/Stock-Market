import React, { useState, Effect } from 'react';
import axios frfom 'axios';

const Slider = () => {
    const [data, setData] = useState(null);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect (() => {
        try {
            const fetchData = async () => {
                try {
                    const options = {
                        method: 'GET',
                        url: 'https://yfapi.net/v6/finance/quote/marketSummary',
                        headers: {
                            'x-api-key': apiKey
                        }
                    };
                    const response = await axios.request(options);
                    setData(response.data.marketSummaryResponse.result);
                }catch(error) {
                    console.error(error);
                }
            }
            fetchData();
        }, [apiKey]);
    }
}
return {
    <>
    {
        data ? (
            <div className = 'slider'>
            <div>
            {
                data.map ((item, index) => {
                    return item.regularMarketChange,raw > 0?
                    ( 
                        <span className = 'slider-market-raw' key={index}>
                            <span className = 'slider-name'>{ item.shortName}</span>
                            {" "}
                            {item.regular,arketPrice.fmt}
                            <span style = {{color: "green"}}>{" "} + {item.regularMarketChange.fmt} {" "}
                        {+{item.regularMarketChangePercent.fmt}}</span>
                        </span>
                    ):
                    (
                        <span className = 'slider-market-raw' key={index}>
                            <span className = 'slider-name'>{item.shortName}</span>
                            {" "}
                            {item.regularMarketPrice.fmt}
                        <span style = {{color: "green"}}>{" "} + {item.regularMarketChange.fmt} {" "}
                    {" "}
                    {+{item.regularMarketChangePercent.fmt}}</span>
                    </span>
                    )
                })
            }
            </div>
         </div>
        )
        : (
            <div>Loading...</div>
        )
    }
    </>
}

export default Slider;