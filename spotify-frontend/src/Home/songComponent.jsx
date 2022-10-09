import React from "react";

function songComponent(props) {
    return (
        <tr>
            <td>
                <center>
                    <img height={50} width={100} src={props.coverImageUrl} />
                </center>
            </td>
            <td><center>{props.songName}</center></td>
            <td><center>{props.dateOfRelease}</center></td>
            <td><center>{props.artistName}</center></td>
            <td><center>{props.rating}</center></td>
        </tr>

    );
}

export default songComponent;