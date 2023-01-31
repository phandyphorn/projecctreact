import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

function Home() {
    // get url.
    // After click on each div, you will see id, name, username, email, address.
    const URL = "https://jsonplaceholder.typicode.com/users/";
    const [users, getUsers] = useState([]);

    const fetchUser = async () => {
        const user = await axios(URL);
        getUsers(user.data)
    };

    const clickDiv = (event) => {
        alert ("Click card to get detail." + event.target.id);
    }

    fetchUser();
    return (
        <div className="home">
            <div className="left-side">
                <h4>Product Lists</h4>
                <div className="cards">
                    {users.map(user => (
                        <div onClick={clickDiv} className='box mb-1'>
                            <p>{user.name}</p>
                            <p>{user.id}</p>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                    <li class="page-item"><a class="page-link" href="#">8</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                    <li class="page-item"><a class="page-link" href="#">10</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                    </ul>
                </div>
            </div>
            
            <div className='right-side'>
                <img className='image' src="" alt="" />
                <div className="content">
                    {users.map(user => (
                        <div className='top'>
                            <div className="left-top">
                                <h4>Product Name</h4>
                                <p>Author: {user.username}</p>
                            </div>
                            <div>
                                <p>Id: {user.id}</p>
                            </div>

                            <div className="text">
                                <p>{user.address.street} {user.address.suite} {user.address.city} {user.address.geo.lat} {user.address.geo.lng}</p>
                            </div>
                        </div>
                    ))}
        
                </div>
            </div>
        </div>
    )
}
export default Home;