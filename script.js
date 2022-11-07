const Mypreview = document.getElementById("preview");
const MyEditor = document.getElementById("editor");

function updatePreview() {
    Mypreview.innerHTML = marked.parse(MyEditor.value);
    
}
MyEditor.addEventListener("input", updatePreview);

function setDefault() {
  let defaultText = `# charles ozochukwu 
  \n## A markdown Preview
   \n[My github page](https://github.com/charlesozo)

   \nHeres some code, \`<div></div>\`, between 2 backticks.
   \nThere's also [links](https://www.freecodecamp.org), and <blockquote>

   \n\`\`\`
   // this is multi-line code:
   function(){
    return multi-line code
   }
   \`\`\`
  \nYou can also make text **bold**... whoa!
  1. And there are numbered lists too.
 1. Use just 1s if you want!
 1. You can simply add list by using 1's
\n![charlesdisplaypicture](https://avatars.githubusercontent.com/u/106936947?v=4)
>The section continues here
   `;

  MyEditor.value = defaultText;
    Mypreview.innerHTML = marked.parse(MyEditor.value);
 
}
