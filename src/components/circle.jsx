/**
 * Circle to show range
 * @param {number} range 
 * @returns 
 */
const Circle = ({ range }) => {
    return (<>
        <div class="circle-wrapper">
            <div class="circular-progress" style={{ background: `conic-gradient(#e3f2f5 ${range * 3.6}deg, transparent 0deg)` }}>
                <div class="inner-circle"></div>
                <div class="fs-3 fw-bold text-white percentage">{range / 10}</div>
                <div class="inner-circle1"></div>
            </div>
        </div>
    </>
    )
}

export default Circle;