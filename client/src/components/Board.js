import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import styles from './Board.module.css';
import Item from './Item';

const Board = props => {
    const { id, name, items, handleDeleteBoard } = props;

    const deleteBoard = () => {
        handleDeleteBoard(id);
    }

    return (
        <div className={styles.Board}>
            <IconButton onClick={deleteBoard}>
                <Delete fontSize="small" />
            </IconButton>
            <h1>{ name }</h1>
            <div>
                { items.map((item, idx) => <Item key={idx} id={idx} content={item} />) }
            </div>
        </div>
    );
}
        
export default Board;