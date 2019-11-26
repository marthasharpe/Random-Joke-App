import React from 'react';

const container = {
    display: "flex",
    justifyContent: "center",
    color: "white",
}

const button = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    margin: "1rem",
    width: 100
}

function Reactions(props) {
    return(
        <div className="reactions-container" style={container}>
            
            <div
                className="reaction"
                style={button}
                onClick={() => props.addLoveCount()}
                >
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