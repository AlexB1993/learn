export function getRandomValue(min: number, max: number): number{
   return min + (Math.random() * (max - min))
}

export const getWidthElemnt = (element: HTMLElement | null): number  => element?.clientWidth || 0;

export const getHeightElemnt = (element: HTMLElement | null): number  => element?.clientHeight || 0;

export const getDocumentWidth = () => document.body.clientWidth;

export const getDocumentHeight = () => document.body.clientHeight;