export function useStripTags(originalString: string) {
    // remove all HTML tags and their contents from a string
    // example: "Ed Joyce<sup>TM</sup>" -> "Ed Joyce"
    const tmp = document.createElement("DIV");
    tmp.innerHTML = originalString;

    // remove all child nodes from the DIV element
    if (tmp.children.length > 0) {
        for (let i = (tmp.children.length - 1); i >= 0; i--) {
            tmp.children[i].parentNode?.removeChild(tmp.children[i])
        }
    };

    // return the text content of the DIV element
    return tmp.textContent || tmp.innerText || "";
}