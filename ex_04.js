function capitalize(words)
{
	return words.map(word => word.toUpperCase());
}

const result = capitalize (["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"]);
displayResult(result);