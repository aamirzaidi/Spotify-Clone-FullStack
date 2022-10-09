import React from "react";

function artistComponent(props) {
    return (
        <tr>
         <td><center>{props.artistName}</center></td>
         <td><center>{props.dob}</center></td>
         <td><center>{props.bio}</center></td>
        </tr>

    );
}

export default artistComponent;