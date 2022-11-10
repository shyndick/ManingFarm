import Lg from "../../../image/lg.png"
import Asus from "../../../image/asus.png"
import Msi from "../../../image/msi.png"
import Nvivia from "../../../image/nvidia.png"
import Samsung from "../../../image/samsung.png"

export const Best = () => {
    return(
        <div className="best_imgs">
            <div className="best_img">
                <a href="https://www.nvidia.com/ru-ru/">
                    <img src={Nvivia} alt="nvidia" target='blank'/>
                </a>
            </div>
            <div className="best_img">
                <a href="https://www.asus.com/">
                    <img src={Asus} alt="asus" target='blank'/>
                </a>
            </div>
            <div className="best_img">
                <a href="https://www.samsung.com/ru/">
                    <img src={Samsung} alt="samsung" target='blank'/>
                </a>
            </div>
            <div className="best_img">
                <a href="https://ru.msi.com/">
                    <img src={Msi} alt="msi" target='blank'/>
                </a>
            </div>
            <div className="best_img">
                <a href="https://www.lg.com/common/index">
                    <img src={Lg} target='blank' alt="lg" />
                </a>
            </div>
        </div>
    )
}