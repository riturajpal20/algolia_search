import { Highlight } from "react-instantsearch";
import { useState } from "react";

export const Hit = ({ hit }) => {
    console.log("Hit data:", hit);
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'popup') {
            setShowPopup(false);
        }
    };

    return (
        <article>
            <button className="search-button" onClick={handleClick}>
                <Highlight attribute="title" hit={hit} />
            </button>
            {showPopup && (
                <div className="popup" onClick={handleOutsideClick}>
                    <div className="popup-content">
                        <button className="close-button" onClick={handleClose}>
                            &times;
                        </button>
                        <h2>{hit.title}</h2>
                        <div className="image-container">
                            <img src={hit.poster_path} alt={hit.title} />
                        </div>
                        <div className="content">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Original Title</td>
                                        <td>{hit.original_title}</td>
                                    </tr>
                                    <tr>
                                        <td>Original Language</td>
                                        <td>{hit.original_language}</td>
                                    </tr>
                                    <tr>
                                        <td>Overview</td>
                                        <td className="description">{hit.overview}</td>
                                    </tr>
                                    <tr>
                                        <td>Popularity</td>
                                        <td>{hit.popularity}</td>
                                    </tr>
                                    <tr>
                                        <td>Release Date</td>
                                        <td>{hit.release_date}</td>
                                    </tr>
                                    <tr>
                                        <td>Vote Average</td>
                                        <td>{hit.vote_average}</td>
                                    </tr>
                                    <tr>
                                        <td>Vote Count</td>
                                        <td>{hit.vote_count}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

                article {
                    font-family: 'Roboto', sans-serif;
                }

                .search-button {
                    border: 1px solid #ccc;
                    background: transparent;
                    color: #000;
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    text-align: center;
                    transition: background-color 0.3s ease, color 0.3s ease;
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                }

                .search-button:hover {
                    background-color: #f0f0f0;
                    color: #333;
                }

                .popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: auto;
                    z-index: 1000;
                }

                .popup-content {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    position: relative;
                    max-width: 600px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    font-family: 'Roboto', sans-serif;
                    animation: fadeIn 0.3s ease;
                }

                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: transparent;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #000;
                    font-weight: bold;
                    padding: 5px;
                    transition: color 0.3s ease;
                }

                .close-button:hover {
                    color: #333;
                }

                h2 {
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                    font-weight: 500;
                }

                .image-container {
                    text-align: center;
                    margin-bottom: 20px;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .content {
                    max-height: calc(90vh - 220px);
                    overflow-y: auto;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }

                td {
                    padding: 10px;
                    border: 1px solid #ddd;
                    font-size: 14px;
                    color: #555;
                }

                td:first-child {
                    font-weight: 500;
                    background: #f7f7f7;
                }

                .description {
                    background: #f9f9f9;
                    padding: 15px;
                    border-radius: 5px;
                    font-size: 14px;
                    line-height: 1.5;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </article>
    );
};
