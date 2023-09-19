import QuotesRender from "./QuotesRender";
import {QuotesContextProvider} from "./QuotesProvider";

const QuotesLayouts = () => {
  return (
      <QuotesContextProvider>
          <QuotesRender/>
      </QuotesContextProvider>
  )
}
export default QuotesLayouts


