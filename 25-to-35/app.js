var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}