import React from 'react';
import css from './RepoItem.css';

const RepoItem = (props) => {
    return (
        <div className={css.RepoItem}>
            <div className={css.RepoInfo}>
                <div className={css.RepoName}>
                    <span className={css.RepoNameTag}>Name:</span>
                    <span className={css.RepoNameValue}>{props.name}</span>
                </div>
                <div className={css.RepoDesc}>
                    <span className={css.RepoNameTag}>Desc:</span>
                    <span className={css.RepoNameValue}>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default RepoItem;