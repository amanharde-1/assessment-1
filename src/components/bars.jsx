import { useMemo, useState } from "react";

/**
 * Bars with status
 * @returns JSX.Element
 */
const Bars = () => {

    const [barValue, setBarValue] = useState(0);

    const onBarClick = (value) => (event) => {
        setBarValue(value);
    }

    const getStatus = useMemo(() => {
        switch (barValue) {
            case 1:
            case 2:
                return 'Low';

            case 3:
                return 'Medium';

            case 4:
            case 5:
                return 'High';

            default: return '';
        }
    }, [barValue]);

    return (

        <div>
            <p className='fw-bold text-white'>{getStatus}</p>
            <div className="bar-wrapper">
                <div class={`bar fifth ${barValue < 5 ? `` : `active`}`} onClick={onBarClick(5)} ></div>
                <div class={`bar fourth ${barValue < 4 ? `` : `active`}`} onClick={onBarClick(4)} ></div>
                <div class={`bar third ${barValue < 3 ? `` : `active`}`} onClick={onBarClick(3)} ></div>
                <div class={`bar second ${barValue < 2 ? `` : `active`}`} onClick={onBarClick(2)} ></div>
                <div class={`bar first ${barValue < 1 ? `` : `active`}`} onClick={onBarClick(1)} ></div>
            </div>
        </div>
    )

}

export default Bars;