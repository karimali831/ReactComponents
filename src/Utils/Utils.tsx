import * as React from 'react';

export const capitalize = (s: string) => {
	if (typeof s !== 'string') { return '' }
	return s.charAt(0).toUpperCase() + s.slice(1)
}

export const priceFormatter = (cell: any, row: any) => {
    // `<i class='glyphicon glyphicon-gbp'></i> ${cell}`;
    return `£${cell}`;
}

export const cleanText = (text: string) => {
	return text.toString().replace(/([A-Z])/g, ' $1').trim()
}

export const boolHighlight = (bool: boolean) => {
	return <span className={"label label-" + (bool ? "success" : "danger")}>{bool ? "Yes" : "No"}</span>
}

export const strIsNullOrEmpty = (s: string) => {
	return s === null || s === undefined || s === "";
}

export const intIsNullOrEmpty = (s: number) => {
	return s === null || s === undefined || s === 0;
}

export const objIsNullOrEmpty = (obj: any) => {
	return obj === null || obj === undefined
}

export const listIsNullOrEmpty = (obj: any[]) => {
	return obj === null || obj === undefined || obj.length === 0;
}