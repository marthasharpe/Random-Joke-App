import React from 'react';

const container = {
    display: "flex",
    justifyContent: "space-around",
    color: "white",
}

const button = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    margin: "1rem"
}

function Reactions(props) {
    return(
        <div className="reactions-container" style={container}>
            
            <div
                className="reaction"
                style={button}
                onClick={() => props.addLoveCount()}
                >
                Love it!
                <span
                    role="img"
                    aria-label="rofl"
                    style={{fontSize: "3rem"}}
                >
                    🤣
                </span>
                {props.loveCount}
            </div>
            
            <div
                className="reaction"
                style={button}
                onClick={() => props.addHuhCount()}
                >
                Huh?
                <span
                    role="img"
                    aria-label="thinking"
                    style={{fontSize: "3rem"}}
                >
                    🤔
                </span>
                {props.huhCount}
            </div>
            
            <div
                className="reaction"
                style={button}
                onClick={() => props.addSpareCount()}
                >
                Spare me!
                <span
                    role="img"
                    aria-label="eye-roll"
                    style={{fontSize: "3rem"}}
                >
                    🙄
                </span>
                {props.spareCount}
            </div>
        </div>
    )
}

export default Reactions;