import React from 'react';

export const ProgressBar = (props) => {
    return (
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded" style={{background: '#F5F5F5', maxWidth: '700px'}}>
                <div style={{width : props.val, background: props.progressColor}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
            </div>
        </div>
    )
}
