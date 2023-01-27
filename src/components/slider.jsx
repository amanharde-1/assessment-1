import { useState } from "react";

/**
 * Slider 
 * @param {Function} onRangeChange(value)
 * @returns JSX.Element
 */
const Slider = ({ onRangeChange }) => {
    const [range, setRange] = useState(0);

    const onChange = (event) => {
        setRange(event.target.value);
        onRangeChange && onRangeChange(event.target.value);
    }
    return (
        <input
            value={range}
            className="slider m-5"
            type={'range'}
            onChange={onChange}
        />
    )
}

export default Slider;