export function row(x?: string, y?: string):string {
  return `display: flex; 
    flex-direction: row; 
    justify-content:${x || "center"};
    align-items: ${y || "center"};`
}
export function column(x?: string, y?: string):string {
  return `display: flex; 
    flex-direction: column; 
    justify-content:${x || "center"};
    align-items: ${y || "center"};`
}
export function rowReverse(x?: string, y?: string):string {
  return `display: flex; 
    flex-direction: row-reverse; 
    justify-content:${x || "center"};
    align-items: ${y || "center"};`
}
export function columnReverse(x?: string, y?: string):string {
  return `display: flex; 
    flex-direction: column-reverse; 
    justify-content:${x || "center"};
    align-items: ${y || "center"};`
}