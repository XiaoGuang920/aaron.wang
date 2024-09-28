import '../styles/NotFound.css';

import not_found_img from "../images/not-found.svg";

function NotFound() {
    return (
        <div id="not-found">
            <img src={not_found_img} alt="404" />
        </div>
    );
}

export default NotFound;
