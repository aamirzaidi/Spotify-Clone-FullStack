import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Axios from "axios";

Modal.setAppElement("#root");

function AddSongPage() {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const data= {
    "songName": {songName},
    "dateOfRelease": "21/01/2000",
    "coverImageUrl": {selectedFile},
    "rating": "5",
    "artistName": "Alan Walker"

};
  function postSongs(){

    Axios.post('http://localhost:8080/songs', {data})
    .then(response => console.log(response.data));

  }

  return (
    <div>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="Artist Details"
        >
          <div className="row">
            <div className="col-md-6">
              <h3 className="left-space">Add Artists</h3>
            </div>
            <div className="col-md-6">
              <AiOutlineClose onClick={toggleModal} className="modal-icon" />
            </div>
          </div>

          <hr />
          <br />
          <form className="up-space">
            <table>
              <tr>
                <td>
                  <label> Artist Name</label>
                </td>
                <td className="left-space">
                  <input type="text" />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label> Date of Birth</label>
                </td>
                <td className="left-space">
                  <input type="date" />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label> Bio</label>
                </td>
                <td className="left-space">
                  <textarea type="text" />
                </td>
              </tr>
              <br />
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button type="reset" className="btn">
                    {" "}
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Done
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </Modal>
      ) : null}
      <h3 className="left-space up-space down-space">Adding a new Song</h3>
      <form className="left-space">
        <table>
          <tr>
            <td>
              <label className="right-space">Song Name</label>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setSongName(e.target.value);
                }}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label className="right-space">Date Released</label>{" "}
            </td>
            <td>
              <input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />{" "}
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label className="right-space">Artwork</label>{" "}
            </td>
            <td>
              {" "}
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />{" "}
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label className="right-space">Artists</label>{" "}
            </td>
            <td>
              <select
                name="artists"
                id="artists"
                onChange={(e) => {
                  setArtist(e.target.value);
                  console.log(artist);
                }}
              >
                <option value="Arijit Singh">Arijit Singh</option>
                <option value="saab">Saab</option>
              </select>
            </td>

            <td>
              <button className="btn btn-primary" onClick={toggleModal}>
                + Add Artists
              </button>{" "}
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <input
                type="submit"
                className="btn btn-outline-primary"
                value="Save"
                onClick={() => {
                  postSongs();
                  navigate("/")}}
              />
              <input
                type="reset"
                className="btn btn-dark left-margin"
                value="Cancel"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default AddSongPage;
