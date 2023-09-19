import {useEffect, useState} from "react";

const getQuotes = ()=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data,dataChange] = useState();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("https://api.quotable.io/quotes")
            .then((res) => res.json())
            .then((resp) => dataChange(resp))
            .catch((e) => console.log(e.message))
    });

    return data;
}
