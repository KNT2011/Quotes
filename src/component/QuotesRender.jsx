import {Fragment, useContext, useEffect} from "react";
import {QuotesProvider} from "./QuotesProvider";
import "./quotes.css"
import {MdChangeCircle, MdNavigateNext} from "react-icons/md";

let itemData = null;
let authorFilter = null;

function QuotesRender() {
    const {quotesData, quotesChange} = useContext(QuotesProvider);

    useEffect(() => {
        fetch("https://api.quotable.io/quotes/", {method: "GET"})
            .then((res) => res.json())
            .then((resp) => quotesChange(resp.results))
            .catch((e) => console.log(e.message))
    })

    const quotes = quotesData.filter(x => (authorFilter != null) ? x.author == authorFilter : (itemData == null) ? x == quotesData[0] : x._id == itemData).map((item) =>
        <Fragment key={item._id}>
            <div style={{margin: "40px 0"}}>
                <div className="content-item">
                    <p>{item.content}</p>
                </div>
                {
                    (authorFilter != null) ? null
                        : <button
                            className="business d-flex justify-content-between align-items-center"
                            onClick={() => {
                                authorFilter = item.author
                            }}
                        >
                            <div>
                                <p>{item.author}</p>
                                {
                                    item.tags.map((x,index)=> <span>{x}{index == item.tags.length-1 ?"":", "} </span>)
                                }
                            </div>
                            <MdNavigateNext/>
                        </button>
                }
            </div>
        </Fragment>
    )

    return <div className="quotes">
        <button className="btn d-flex align-items-center"
                onClick={() => itemData = quotesData[Math.floor(Math.random() * quotesData.length)]._id}>random
            <MdChangeCircle style={{marginLeft: "5px"}}/>
        </button>
        {
            authorFilter != null ?
                <h3>{authorFilter}</h3> : null
        }
        {quotes}
        {
            authorFilter != null ?
                <a href="" onClick={() => authorFilter = null}>back</a> : null
        }
    </div>;

}

export default QuotesRender

