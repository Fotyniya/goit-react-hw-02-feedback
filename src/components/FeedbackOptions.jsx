import { Section } from "./Section"

export const FeedbackOptions = ({onGoodFeedback,onNeutralFeedback,onBadFeedback}) => {
    return <div><Section title={"Please leave feedback"}>
        <button type="button" onClick={onGoodFeedback}>Good</button>
        <button type="button" onClick={onNeutralFeedback}>Neutral</button>
        <button type="button" onClick={onBadFeedback}>Bad</button> 
    </Section>  
    </div>
}