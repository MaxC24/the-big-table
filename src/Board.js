import React from "react";

const Board = ({ width = 20, height = 20 }) => {

	const rows = [];

	for(let i = 0; i < height; i ++ ){
		let currentCols = [];
		for(let j = 0; j < width; j ++) {
			currentCols.push(<td key={'w' + j + 'h' + j}></td>);
		}
		rows.push(<tr key={'h'+ i + 'w' + i}>{ currentCols }</tr>);
	}

	return (
		<table><tbody>{ rows }</tbody></table>
	)
}

export default Board;