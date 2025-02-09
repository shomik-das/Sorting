import React, { useState, useEffect } from "react";
import "./Bars.css";

const ListBlocks = ({ blocks, compare, sorted, swap }) => {
    const [width, setWidth] = useState(
        Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5)
    );
    
    const color = width > 12 ? "white" : "transparent";

    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));
        }

        window.addEventListener("resize", handleResize);

        setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));
    }, [blocks.length]);

    return (
        <div className="listBlocks">
            {blocks.map((block, i) => {
                const height = (block * 500) / blocks.length;
                let bg = "#3498db";

                // i th element is being compared with the other element
                if (compare && (i === compare[0] || i === compare[1])) {
                    bg = "#f1c40f";
                }

                if (swap && (i === swap[0] || i === swap[1])) {
                    bg = "#e74c3c";
                }
                
                // i th element is in sorted position
                if (sorted && sorted.includes(i)) {
                    bg = "#2ecc71";
                }

                const style = {
                    backgroundColor: bg,
                    color: color,
                    height: height,
                    width: width,
                }
                return (
                    <div 
                        key={i} 
                        className="block" 
                        style={style}
                    >
                        {block}
                    </div>
                )
            })}
        </div>
    );
}

export default ListBlocks;