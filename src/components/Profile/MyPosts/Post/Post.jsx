import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wareh2sTFt9oXaOyjVfHUHVaYyl7JRwhyw&s" alt="" />
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    );
}

export default Post;