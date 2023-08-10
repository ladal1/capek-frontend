import React from "react";
import '../App.scss';
import {Link} from 'react-router-dom'
function Event(){
    return(
        <div className="Text">
            <div className="Types">
                <ul>
                <li>
                    <Link to="#">A4/A5 Mandolins</Link>
                    
                </li>
                <li>|</li>
                <li>
                    <Link to="#">F5 Mandolin</Link>

                </li>
                <li>|</li>
                <li>
                    <Link to="#">A4/A5 Mandola</Link>

                </li>
                <li>|</li>
                <li>
                    <Link to="#">F4/F5 Mandola</Link>

                </li>
                <li>|</li>
                <li>
                    <Link to="#">Octave Mandolin</Link>
                </li>
                <li>|</li>
                <li>
                    <Link to="#">Mandocello</Link>
                </li>
                </ul>
                
                
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis risus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Integer lacinia. Maecenas libero. Integer vulputate sem a nibh rutrum consequat. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Integer in sapien. Nullam sit amet magna in magna gravida vehicula. Suspendisse nisl.
            </p>
        </div>
    );


}

export default Event;