const encrypt = () => {
    const inputValue = document.querySelector("#main-input").value
    let result = inputValue.replaceAll("e", "enter").replace("i", "imes").replace("a" ,"ai").replace("o", "ober").replace("u" , "ufat");
    console.log(document.querySelector("#main-textarea"))
    document.querySelector("#main-textarea").value= result
    
}


const decrypt = () => {
    const inputValue = document.querySelector("#main-input").value
    let result = inputValue.replaceAll("enter", "e").replace("imes", "i").replace("ai" ,"a").replace("ober", "o").replace("ufat" , "u");
    document.querySelector("#main-textarea").value= result
}

const copy = () => {
    const textareaValue = document.querySelector("#main-textarea").value
    navigator.clipboard.writeText(textareaValue).then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
      },() => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
      });
}
