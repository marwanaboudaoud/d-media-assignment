import { New } from "./New"

export const News = () => {
    return (
        <div className='news-component'>
            <h2 className="mb-4">New</h2>
            <New title={"Hydrogen VS Electric Cars"}
                text={"Will hydrogen-fueled cars ever catch up to EV's"}
            />
            <hr />
            <New title={"The Downsides of AI Artistry"}
                text={"What are the possible adverse effects of on-demand AI image generation?"}
            />
            <hr />
            <New title={"Is VC Funding Drying Up?"}
                text={"Private funding by VC firms is down 50% YOY.We take a look at what that means."}
            />
        </div>
    )
}

