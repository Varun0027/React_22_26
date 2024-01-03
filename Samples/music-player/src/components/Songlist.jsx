import React, { useState, useEffect } from 'react';
import { getSongs } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const Songlist = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [active, setActive] = useState(null);
    const [songs, setSongs] = useState([]);

    const fetchSongs = async () => {
        const res = await getSongs();
        setSongs(res.data);
    };

    const handleSong = (id) => {
        navigate(`/song/${id}`);
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    useEffect(() => {
        setActive(parseInt(id));
    }, [id]); 

    return (
        <>
            <div className='h-[90%] w-[90%] flex flex-col gap-4 justify-start items-center'>
                {songs.map((song) => (
                    <div
                        key={song.id}
                        className={`h-20 flex flex-row gap-2 w-full border-l-4
                            bg-white rounded-r-md justify-center items-center shadow-sm cursor-pointer
                            hover:border-emerald-500 hover:text-emerald-500
                            ${song.id === active
                                    ? 'text-emerald-400 border-emerald-500'
                                    : 'text-orange-400 border-orange-500'
                            }`}
                        onClick={() => handleSong(song.id)}>
                        <div className='h-full w-3/12 flex items-center justify-center'>
                            <img
                                src={song.coverurl}
                                alt='thumb'
                                className='h-[3.5rem] w-[3.5rem] rounded-full shadow-md border-8 border-transparent'
                            />
                        </div>
                        <div className='text-xl w-9/12 h-full font-bold flex items-center justify-start pr-10'>
                            {song.id === active ? (
                                <span className='animate-pulse'>
                                    {song.title}
                                </span>
                            ) : (
                                <span>{song.title}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Songlist;
