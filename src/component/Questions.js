import AnswerQuestion from "./AnswerQuestion"
import QuestionStatus from "./QuestionStatus"
import { withRouter } from 'react-router-dom';
import NotFound from "./NotFound";
import { useSelector} from "react-redux";
const Questions = (props) => {

    const DATA = useSelector(state => state.Data)
    const {questions} = DATA

    const Links = useSelector(state => state.Link)
    const { link } = Links
    return (
        <div>
            <AnswerQuestion match = {props.match.params.id}/>
            <QuestionStatus match = {props.match.params.id}/>
{ !questions.find(({ id }) =>`/questions/${id}` === link) && 
!questions.find(({ id }) =>id === props.match.params.id)
&& <NotFound/>}
        </div>
    )
}

export default withRouter(Questions)
