import './styles.css';
function TagsMenu(){
    return(
        <div id="tags-container">
            <ul>
                <li><a href="#new">New</a></li>
                <li><a href="#top">Top</a></li>
                <li><a href="#hot">Hot</a></li>
                <li><a href="#closed">Closed</a></li>
            </ul>
        </div>
    )
}

export default TagsMenu;