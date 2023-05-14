import { Blog } from "./Blog"
import RetroImage from "../../assets/images/image-retro-pcs.jpg"
import Laptop from "../../assets/images/image-top-laptops.jpg"
import Gaming from "../../assets/images/image-gaming-growth.jpg"

export const Blogs = () => {
    return (
        <div className="row mt-5 mb-5 blogs">
            <div className="col-md-4 col-sm-6">
                <Blog image={RetroImage} id={"01"} title={"Reviving Retro PCs"} text={"what happens when old PCs are given modern upgrades?"} />
            </div>
            <div className="col-md-4 col-sm-6">
                <Blog image={Laptop} id={"02"} title={"Top 10 Laptops of 2022"} text={"Our best picks for various needs and budgets"} />
            </div>
            <div className="col-md-4 col-sm-6">
                <Blog image={Gaming} id={"03"} title={"The Growth of Gaming"} text={"How the pandemic has spraked fresh opportunities"} />
            </div>
        </div>
    )
}
