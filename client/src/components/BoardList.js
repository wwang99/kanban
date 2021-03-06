import React from 'react';
import styles from './BoardList.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Board from './Board';

const BoardList = props => {
    const { boards, loading, handleDeleteBoard, handleMoveBoard, handleEditBoard, handleAddItem, handleDeleteItem, handleReorderItem, handleMoveItem, handleEditItem, nightmode } = props;

    const editBoardFunctions = {
        handleDeleteBoard, handleMoveBoard, handleEditBoard, handleAddItem, handleDeleteItem, handleReorderItem, handleMoveItem, handleEditItem
    }

    if (loading) {
        return (
            <div className={`${styles.BoardList} ${styles.Loading}`}>
                <CircularProgress size={55} />
            </div>
        );
    }
    else {
        return (
            <div className={styles.BoardList}>
                { 
                    boards.length !== 0 ? 
                        boards.map((board, idx) => {
                            return <Board key={idx} id={idx} name={board.name} items={board.items} color={board.color} boardsLength={boards.length} {...editBoardFunctions} nightmode={nightmode} />
                        }) 
                    : <h2>Add a new board to get started!</h2> 
                }
            </div>
        );
    }
}

export default BoardList;